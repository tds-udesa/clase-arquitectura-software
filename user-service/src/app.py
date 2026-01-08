
from fastapi import FastAPI

from src.routers.users import router as users_router

app = FastAPI(
    title= "User Service API",
    version= "1.0.0",
    description= "API for managing users.",
    license_info= {
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT"
    }
)


app.include_router(users_router)
