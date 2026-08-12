from fastapi import Depends, FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from .auth import create_access_token, current_user, hash_password, require_project_role, verify_password
from .db import Base, engine, get_db
from .models import Organization, OrganizationMember, Project, ProjectMember, User

app = FastAPI(title="SitePilot AI API", version="0.1.0")
Base.metadata.create_all(bind=engine)


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    display_name: str
    organization_name: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class ProjectCreate(BaseModel):
    name: str
    location: str | None = None


@app.get("/health")
def health():
    return {"status": "ok", "service": "sitepilot-api"}


@app.post("/auth/register", response_model=TokenResponse, status_code=201)
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == payload.email).first():
        raise HTTPException(status_code=409, detail="Email already registered")
    user = User(email=payload.email, password_hash=hash_password(payload.password), display_name=payload.display_name)
    org = Organization(name=payload.organization_name)
    db.add_all([user, org])
    db.flush()
    db.add(OrganizationMember(organization_id=org.id, user_id=user.id, role="owner"))
    db.commit()
    return TokenResponse(access_token=create_access_token(user.id))


@app.post("/auth/token", response_model=TokenResponse)
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == username).first()
    if not user or not verify_password(password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return TokenResponse(access_token=create_access_token(user.id))


@app.get("/me")
def me(user: User = Depends(current_user)):
    return {"id": user.id, "email": user.email, "display_name": user.display_name}


@app.post("/projects", status_code=201)
def create_project(payload: ProjectCreate, user: User = Depends(current_user), db: Session = Depends(get_db)):
    membership = db.query(OrganizationMember).filter(OrganizationMember.user_id == user.id).first()
    if not membership or membership.role not in {"owner", "admin", "project_manager"}:
        raise HTTPException(status_code=403, detail="Insufficient organization permissions")
    project = Project(organization_id=membership.organization_id, name=payload.name, location=payload.location)
    db.add(project)
    db.flush()
    db.add(ProjectMember(project_id=project.id, user_id=user.id, role=membership.role))
    db.commit()
    return {"id": project.id, "name": project.name, "location": project.location, "status": project.status}


@app.get("/projects/{project_id}")
def get_project(project_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    require_project_role(project_id, {"owner", "admin", "project_manager", "superintendent", "engineer", "field_worker", "viewer"}, user, db)
    project = db.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"id": project.id, "name": project.name, "location": project.location, "status": project.status}
