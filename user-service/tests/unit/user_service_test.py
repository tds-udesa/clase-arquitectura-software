from src.services.user import get_all_users, get_user_by_id
import pytest



def test_get_all_user_returns_7_users():
    # Arrange
    expected_users = 7

    # Act
    users = get_all_users()

    # Assert
    assert len(users) == expected_users


def test_get_user_by_id_returns_correct_user():
    # Arrange & Act
    user = get_user_by_id(3)

    # Assert
    assert user is not None
    assert user.id == 3
    assert user.name == "Carlos López"
    assert user.email == "carlos.lopez@example.com"
    assert user.address == "Av. Siempre Viva 456"
    assert user.role == "user"
