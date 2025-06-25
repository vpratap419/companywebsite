from email.message import EmailMessage
from app.modules.certification.models.models import CertificationForm

def create_email_message(sender_email: str, receiver_email: str, form_data:CertificationForm):
    msg = EmailMessage()
    msg["Subject"] = f"New Certification Form Submission from {form_data.fullname}"
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg.set_content(f"Full Name: {form_data.fullname}\nCourse Name: {form_data.coursename}\nCompletion Date:{form_data.completiondate}\nEnrolled Degree:{form_data.enrolleddegree}")
    return msg
