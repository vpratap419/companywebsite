from fastapi import APIRouter, HTTPException, Depends
from app.modules.popup.models.models import ContactForm
from app.modules.popup.services.services import send_email

router = APIRouter()

@router.post("/popup/send-email")
async def send_contact_email(form_data: ContactForm):
    try:
        response = await send_email(form_data)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


