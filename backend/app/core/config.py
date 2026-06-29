from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    smtp_email: str = ""
    smtp_password: str = ""
    admin_key: str = "changeme123"

    class Config:
        env_file = ".env"

settings = Settings()