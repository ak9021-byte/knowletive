from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import Base, engine
from app.api.routes import appointments, admin

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Knowletive API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://knowletive-seven.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(appointments.router)
app.include_router(admin.router)


@app.get("/")
def root():
    return {"message": "Knowletive API is running"}