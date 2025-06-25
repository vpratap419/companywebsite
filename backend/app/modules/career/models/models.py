from pydantic import BaseModel, EmailStr

class EmailSchema(BaseModel):
    fullName: str
    fatherName: str
    collegeName: str
    studentId: str
    mobile_number: str
    email: EmailStr
    qualification: str
    duration: str
    location: str
    message: str

class Phone(BaseModel):
    mobile_number: str

class VerifyOTP(BaseModel):
    otp : str

class EmailRequest(BaseModel):
    email: EmailStr

class EmailOTPVerify(BaseModel):
    otp: str

