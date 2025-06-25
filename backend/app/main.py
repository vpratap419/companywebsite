from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import mongo_db_manager
from app.modules.user.routes.routes import router as user_router
from app.modules.contactus.routes.routes import router as contact_router
from app.modules.career.routes.routes import router as career_router
from app.modules.certification.routes.routes import router as certification_router
from app.modules.popup.routes.routes import router as popup_router


app = FastAPI()

# Allow requests from frontend
origins = ["http://127.0.0.1:3000", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific frontend origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allows all headers
)

app.include_router(user_router, tags=["User Module"])
app.include_router(contact_router, tags=["Contact Module"])
app.include_router(career_router, tags=["Career Module"])
app.include_router(certification_router, tags=["Certification Module"])
app.include_router(popup_router, tags=["Popup Module"])


@app.on_event("startup")
async def startup_db():
    mongo_db_manager.connect()

@app.on_event("shutdown")
async def shutdown_db():
    mongo_db_manager.close()

