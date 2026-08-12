from datetime import datetime, timedelta, timezone

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pwdlib import PasswordHash
from sqlalchemy.orm import Session

from .config import settings
from .db import get_db
from .models import OrganizationMember, ProjectMember, User

password_hash = PasswordHash.recommended()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")

ROLES = {
    "owner",
    "admin",
    "project_manager",
    "superintendent",
    "engineer",
    "field_worker",
    "viewer",
}


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, hashed: str) -> bool:
    return password_hash.verify(password, hashed)


def create_access_token(user_id: str) -> str:
    expires = datetime.now(timezone.utc) + timedelta(minutes=settings.access_token_expire_minutes)
    return jwt.encode({"sub": user_id, "exp": expires}, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> User:
    credentials_error = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid authentication credentials")
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
        user_id = payload.get("sub")
        if not user_id:
            raise credentials_error
    except jwt.PyJWTError as exc:
        raise credentials_error from exc

    user = db.get(User, user_id)
    if not user:
        raise credentials_error
    return user


def require_org_role(*allowed_roles: str):
    def dependency(user: User = Depends(current_user), db: Session = Depends(get_db)) -> User:
        membership = db.query(OrganizationMember).filter(OrganizationMember.user_id == user.id).first()
        if not membership or membership.role not in allowed_roles:
            raise HTTPException(status_code=403, detail="Insufficient organization permissions")
        return user
    return dependency


def require_project_role(project_id: str, allowed_roles: set[str], user: User, db: Session) -> None:
    membership = db.query(ProjectMember).filter(
        ProjectMember.project_id == project_id,
        ProjectMember.user_id == user.id,
    ).first()
    if not membership or membership.role not in allowed_roles:
        raise HTTPException(status_code=403, detail="Insufficient project permissions")
