from fastapi import HTTPException
from twilio.rest import Client
import random
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import ssl

twilio_account_sid = 'AC92fd4a0c31d88ab94fa3a43b362de7fb'
twilio_auth_token = '44036a84d40fd51de9c4b609257c018a'
twilio_phone_number = '+17473300359'

SENDGRID_API_KEY = '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'
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
