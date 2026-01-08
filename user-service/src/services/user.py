from src.models.user import User


async def get_all_users() -> list[User]:
    """
    Get all users

    :return: Description
    :rtype: list[User]
    """
    users = [
        User(
            id=1,
            name="Alejo Villores",
            email="alejo.villores@example.com",
            address="Av. Cabildo 1234",
            role="admin",
        ),
        User(
            id=2,
            name="María García",
            email="maria.garcia@example.com",
            address="Calle Falsa 123",
            role="user",
        ),
        User(
            id=3,
            name="Carlos López",
            email="carlos.lopez@example.com",
            address="Av. Siempre Viva 456",
            role="user",
        ),
        User(
            id=4,
            name="Ana Martínez",
            email="ana.martinez@example.com",
            address="Calle Principal 789",
            role="user",
        ),
        User(
            id=5,
            name="Luis Rodríguez",
            email="luis.rodriguez@example.com",
            address="Av. Libertador 1010",
            role="user",
        ),
        User(
            id=6,
            name="Sofía Fernández",
            email="sofia.fernandez@example.com",
            address="Calle del Sol 2020",
            role="user",
        ),
        User(
            id=7,
            name="Diego Sánchez",
            email="diego.sanchez@example.com",
            address="Av. del Río 3030",
            role="user",
        ),
    ]

    return users


async def get_user_by_id(user_id: int) -> User | None:
    """
    Get user by ID

    :param user_id: Description
    :type user_id: int
    :return: Description
    :rtype: User | None
    """
    users = await get_all_users()
    user = next((user for user in users if user.id == user_id), None)

    return user
