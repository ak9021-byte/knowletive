from pydantic import BaseModel, EmailStr
from datetime import date, datetime
from typing import Optional

class AppointmentCreate(BaseModel):
    full_name: str
    phone_number: str
    email: EmailStr
    city: str
    consultation_mode: str
    preferred_date: Optional[date] = None
    time_slot: Optional[str] = None
    message: Optional[str] = None
    whatsapp_consent: bool = False

class AppointmentResponse(AppointmentCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True