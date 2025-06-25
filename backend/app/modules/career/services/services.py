import smtplib
import email.message
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import email.mime.base
from email.mime.application import MIMEApplication
from email.mime.image import MIMEImage
from app.core.database import mongo_db_manager
from fastapi.encoders import jsonable_encoder
from bson import Binary


SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "lollipopsingh07@gmail.com"
SENDER_PASSWORD = "hicm sdxn smwj vvvn"
RECEIVER_EMAIL = "lollipopsingh07@gmail.com"


async def send_email(form_data, subject: str, body: str, resume_filename, resume_content, photo_filename, photo_content):
    # Create the email message
    msg = email.mime.multipart.MIMEMultipart()
    msg["Subject"] = subject
    msg["From"] = SENDER_EMAIL
    msg["To"] = RECEIVER_EMAIL

    # Attach the email body (as text/html)
    msg.attach(MIMEText(body, "html"))

    # Attach the resume file
    attachment = MIMEApplication(resume_content, Name=resume_filename)
    attachment["Content-Disposition"] = f'attachment; filename="{resume_filename}"'
    msg.attach(attachment)

    # Attach the image file
    photo_attachment = MIMEImage(photo_content, Name=photo_filename, _subtype="")
    photo_attachment.add_header("Content-Disposition", f'attachment; filename="{photo_filename}"')
    msg.attach(photo_attachment)

    # Send the email
    try:

        db = mongo_db_manager.get_database("career")
        document = {
            **jsonable_encoder(form_data),
            "resume_file": Binary(resume_content),
            "resume_filename": resume_filename,
            "photo_file": Binary(photo_content),
            "photo_filename": photo_filename,
        }
        await db.careers.insert_one(document)

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        server.quit()
    except Exception as e:
        print("Error sending email:", e)

