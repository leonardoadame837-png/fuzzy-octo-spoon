# SitePilot AI Backend

Production-oriented API foundation for SitePilot AI.

## Architecture

- FastAPI HTTP API
- SQLAlchemy ORM
- Pydantic settings
- JWT access tokens
- SQLite for local development
- PostgreSQL via `DATABASE_URL` for production
- Organization/project scoped RBAC

## Initial roles

`owner`, `admin`, `project_manager`, `superintendent`, `engineer`, `field_worker`, `viewer`

## Security boundary

Frontend role visibility is only UX. Every protected API operation must validate the authenticated user, organization membership, project membership, and required role server-side.

## Configuration

Copy `.env.example` to `.env` for local development. Never commit real credentials or production secrets.

## Local development

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Health endpoint: `GET /health`

OpenAPI: `/docs`
