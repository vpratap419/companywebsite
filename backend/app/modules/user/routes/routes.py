from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.modules.user.schemas.schemas import UserCreate, UserUpdate
from app.modules.user.services.auth_service import register_user, authenticate_user, generate_token
from app.modules.user.utils.user_utils import get_current_user
from app.modules.user.services.auth_service import update_user_details, delete_user_account

router = APIRouter(prefix="/auth")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post("/register")
async def register(user: UserCreate):
    return await register_user(user.email, user.password)

@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    access_token = await generate_token(user["email"])
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/user")
async def get_user(current_user: dict = Depends(get_current_user)):
    return {"email": current_user["email"]}

@router.put("/user/update")
async def update_user(update_data: UserUpdate, current_user: dict = Depends(get_current_user)):
    return await update_user_details(current_user["email"], update_data.password)

@router.delete("/user/delete")
async def delete_user(current_user: dict = Depends(get_current_user)):
    return await delete_user_account(current_user["email"])
