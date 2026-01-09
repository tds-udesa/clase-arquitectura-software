from src.app import app
from src.models.user import User
from fastapi.testclient import TestClient
import pytest

client = TestClient(app)


@pytest.mark.integration
def test_all_users():
    # Assert & Act
    response = client.get("/users")

    # Assert
    assert response.status_code == 200


@pytest.mark.integration
def test_get_user_by_id():
    # Arragne & Act
    response = client.get("/users/3")
    data = response.json()
    user = User(**data)

    # Assert
    assert response.status_code == 200
    assert user is not None
    assert user.id == 3
    assert user.name == "Carlos López"
    assert user.email == "carlos.lopez@example.com"
    assert user.address == "Av. Siempre Viva 456"
    assert user.role == "user"
