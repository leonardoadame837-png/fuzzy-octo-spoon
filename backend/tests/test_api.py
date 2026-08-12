import os

os.environ.setdefault("JWT_SECRET", "test-secret-change-me")

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_register_and_me():
    email = "test-sitepilot@example.com"
    response = client.post("/auth/register", json={
        "email": email,
        "password": "correct horse battery staple",
        "display_name": "Test User",
        "organization_name": "Test Construction",
    })
    assert response.status_code in (201, 409)
    if response.status_code == 201:
        token = response.json()["access_token"]
        me_response = client.get("/me", headers={"Authorization": f"Bearer {token}"})
        assert me_response.status_code == 200
        assert me_response.json()["email"] == email
