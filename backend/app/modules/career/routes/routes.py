from fastapi import APIRouter, Form, File, UploadFile, HTTPException, Response, Cookie
from pydantic import EmailStr
from app.modules.career.models.models import EmailSchema, VerifyOTP, Phone,EmailOTPVerify, EmailRequest
from app.modules.career.services.services import send_email
from app.modules.career.utils.email_utils import format_email_body
from app.modules.career.repository.repository import generate_otp, otp_storage, send_otp, send_otp_email

router = APIRouter()

@router.post("/career/send-email")
async def send_email_api(
    fullName: str = Form(...),
    fatherName: str = Form(...),
    collegeName: str = Form(...),
    studentId: str = Form(...),
    mobile_number: str = Form(...),
    email: str = Form(...),
    qualification: str = Form(...),
    duration: str = Form(...),
    location: str = Form(...),
    message: str = Form(...),
    resume: UploadFile = File(...),
    photo : UploadFile = File(...)
):
    form_data = EmailSchema(
        fullName=fullName, fatherName=fatherName, collegeName=collegeName,
        studentId=studentId, mobile_number=mobile_number, email=email,
        qualification=qualification, duration=duration, location=location, message=message,
    )

    email_body = format_email_body(form_data)

    # Read file contents as binary
    resume_content = await resume.read()
    photo_content = await photo.read()

    await send_email(
        form_data=form_data,
        subject="New Internship Application",
        body=email_body,
        resume_filename=resume.filename,
        resume_content=resume_content,
        photo_filename=photo.filename,
        photo_content=photo_content
    )

    return {"message": "Email sent successfully!"}


@router.post("/career/send-otp")
async def send_otp_route(phone: Phone, response: Response):
    otp = generate_otp()
    otp_storage[phone.mobile_number] = otp
    send_otp(phone.mobile_number, otp)
    response.set_cookie(key="mobile_number", value=phone.mobile_number, httponly=True)
    return {"detail": "Otp sent successfully"}

@router.post("/career/verify-otp")
async def verify_otp(otp_data: VerifyOTP, mobile_number: str = Cookie(None)):
    if not mobile_number:
        raise HTTPException(status_code=400, detail="Phone number not found in session")

    stored_otp = otp_storage.get(mobile_number)
    if not stored_otp:
        raise HTTPException(status_code=400, detail="OTP not found")
    if stored_otp != otp_data.otp:
        raise HTTPException(status_code=400, detail="Tnvalid OTP")
    del otp_storage[mobile_number]
    return {"detail" : "OTP verified successfully"}

@router.post("/career/email/send-otp")
async def send_email_otp(req: EmailRequest, response: Response):
    otp = generate_otp()
    otp_storage[req.email] = otp
    send_otp_email(req.email, otp)
    response.set_cookie(key="email", value=req.email, httponly=True)
    return {"detail": "OTP sent to email"}

@router.post("/career/email/verify-otp")
async def verify_email_otp(data: EmailOTPVerify, email: EmailStr = Cookie(None)):
    if not email:
        raise HTTPException(status_code=400, detail="Email not found in session")

    stored_otp = otp_storage.get(email)
    if not stored_otp:
        raise HTTPException(status_code=400, detail="No OTP found for this email")
    if stored_otp != data.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")
    del otp_storage[email]
    return {"detail": "Email verified successfully"}

