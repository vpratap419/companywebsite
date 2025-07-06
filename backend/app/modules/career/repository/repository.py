from fastapi import HTTPException
from twilio.rest import Client
import random
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import ssl

twilio_account_sid = 'Replace with sid'
twilio_auth_token = 'Replace with auth token'
twilio_phone_number = '+17473300359'

SENDGRID_API_KEY = 'Replace with API key'
SENDER_EMAIL = 'lollipopsingh07@gmail.com'  # must be verified in SendGrid

client = Client(twilio_account_sid, twilio_auth_token)

otp_storage = {}


def generate_otp():
    return str(random.randint(1000,9999))

def send_otp(mobile_number, otp):
    message = f"Your otp is: {otp}"
    client.messages.create(to=mobile_number, from_=twilio_phone_number, body=message)

def send_otp_email(email, otp):
    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=email,
        subject="Your Verification Code",
        html_content=f"<strong>Your verification code is: {otp}</strong>"
    )
    try:
        ssl._create_default_https_context = ssl._create_unverified_context

        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Failed to send email")
