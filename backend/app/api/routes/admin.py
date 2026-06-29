from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.core.config import settings

router = APIRouter(prefix="/admin", tags=["Admin"])


class LoginRequest(BaseModel):
    password: str


@router.post("/login")
def admin_login(data: LoginRequest):
    if data.password != settings.admin_key:
        raise HTTPException(status_code=401, detail="Invalid password")
    return {"token": settings.admin_key}