from pydantic import EmailStr

from app.modules.user.repository.user_repository import get_user_by_username, create_user, update_user, delete_user
from app.modules.user.utils.user_utils import hash_password, verify_password, create_access_token
from datetime import timedelta
from fastapi import HTTPException

async def register_user(email: EmailStr, password: str):
    existing_user = await get_user_by_username(email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = hash_password(password)
    user_data = {"email": email, "hashed_password": hashed_password}
    await create_user(user_data)
    return {"message": "User registered successfully"}

async def authenticate_user(email: EmailStr, password: str):
    user = await get_user_by_username(email)
    if not user or not verify_password(password, user["hashed_password"]):
        return None
    return user

async def generate_token(email: EmailStr):
    return create_access_token(data={"sub": email}, expires_delta=timedelta(minutes=30))


async def update_user_details(email: EmailStr = None, password: str = None):
    update_data = {}
    if email:
        update_data["email"] = email
    if password:
        update_data["hashed_password"] = hash_password(password)

    result = await update_user(email, update_data)
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="User not found or no changes made")
    return {"message": "User updated successfully"}


async def delete_user_account(email: EmailStr):
    result = await delete_user(email)
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
