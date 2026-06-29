from fastapi import APIRouter, Depends, BackgroundTasks, Header, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.config import settings
from app.models.appointment import Appointment
from app.schemas.appointment import AppointmentCreate, AppointmentResponse
from typing import List, Optional

router = APIRouter(prefix="/appointments", tags=["Appointments"])


def verify_admin(x_admin_key: Optional[str] = Header(None)):
    if x_admin_key != settings.admin_key:
        raise HTTPException(status_code=401, detail="Unauthorized")


@router.post("/", response_model=AppointmentResponse)
def create_appointment(
    data: AppointmentCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
):
    appointment = Appointment(**data.model_dump())
    db.add(appointment)
    db.commit()
    db.refresh(appointment)
    return appointment


@router.get("/", response_model=List[AppointmentResponse])
def list_appointments(
    db: Session = Depends(get_db),
    _: None = Depends(verify_admin),
):
    return db.query(Appointment).order_by(Appointment.created_at.desc()).all()