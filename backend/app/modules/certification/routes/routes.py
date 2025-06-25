from fastapi import APIRouter, HTTPException
from app.modules.certification.models.models import CertificationForm
from app.modules.certification.services.services import send_email

router = APIRouter()

@router.post("/certification/send-email")
async def send_contact_email(form_data: CertificationForm):
    try:
        response = await send_email(form_data)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
