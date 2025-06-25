from pydantic import EmailStr

from app.core.database import mongo_db_manager
from app.modules.user.models.models import User

async def get_user_by_username(email: EmailStr):
    db = mongo_db_manager.get_database("user")
    return await db.users.find_one({"email": email})

async def create_user(user: User):
    db = mongo_db_manager.get_database("user")
    return await db.users.insert_one(user)

async def update_user(email: EmailStr, update_data: dict):
    db = mongo_db_manager.get_database("user")
    return await db.users.update_one({"email": email}, {"$set": update_data})

async def delete_user(email: EmailStr):
    db = mongo_db_manager.get_database("user")
    return await db.users.delete_one({"email": email})
