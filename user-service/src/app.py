
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers.users import router as users_router

app = FastAPI(
    title= "User Service API",
    version= "1.0.0",
    description= "API for managing users.",
    license_info= {
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT"
    },
    root_path=os.getenv("ROOT_PATH", ""),
)

origins = [
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users_router)
