from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date
from sqlalchemy.sql import func
from app.core.database import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    email = Column(String, nullable=False)
    city = Column(String, nullable=False)
    consultation_mode = Column(String, nullable=False)
    preferred_date = Column(Date, nullable=True)
    time_slot = Column(String, nullable=True)
    message = Column(String, nullable=True)
    whatsapp_consent = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())