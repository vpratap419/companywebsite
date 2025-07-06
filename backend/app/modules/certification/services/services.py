import smtplib
from app.modules.certification.repository.repository import create_email_message
from app.core.database import mongo_db_manager
from fastapi.encoders import jsonable_encoder
from app.modules.certification.models.models import CertificationForm


SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_EMAIL = "lollipopsingh07@gmail.com"
SMTP_PASSWORD = "password"

async def send_email(form_data: CertificationForm):
    try:

        db = mongo_db_manager.get_database("certification")
        await db.certifications.insert_one(jsonable_encoder(form_data))

        msg = create_email_message(SMTP_EMAIL, "lollipopsingh07@gmail.com", form_data)

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_EMAIL, SMTP_PASSWORD)
            server.send_message(msg)

        return {"message": "Email sent successfully!"}

    except Exception as e:
        raise Exception(f"Failed to send email: {str(e)}")
