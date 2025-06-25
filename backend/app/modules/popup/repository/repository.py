from email.message import EmailMessage
from app.modules.popup.models.models import ContactForm


def create_email_message(sender_email: str, receiver_email: str, form_data:ContactForm):
    msg = EmailMessage()
    msg["Subject"] = f"New Contact Form Submission from {form_data.name}"
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg.set_content(f"Name: {form_data.name}\nEmail: {form_data.email}\nPhone: {form_data.phone}\nPurpose:{form_data.purpose}")
    return msg
