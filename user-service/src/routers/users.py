from fastapi import APIRouter, status, HTTPException
import typing

import src.services.user as user_service
import src.models.user

router = APIRouter(
    prefix="/users", tags=["users"], responses={404: {"description": "Not found"}}
)


@router.get(
    "/",
    summary="Get all users",
    status_code=status.HTTP_200_OK,
    response_description="List of users",
    response_model=typing.List[src.models.user.User],
)
async def get_users() -> typing.Any:
    users = user_service.get_all_users()
    return users


@router.get(
    "/{user_id}",
    summary="Get user by ID",
    status_code=status.HTTP_200_OK,
    response_description="User details",
    response_model=src.models.user.User,
    responses={
        status.HTTP_404_NOT_FOUND: {"description": "User not found"},
        status.HTTP_200_OK: {"description": "User found"},
    },
)
async def get_user(user_id: int) -> typing.Any:
    user = user_service.get_user_by_id(user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )
    return user
