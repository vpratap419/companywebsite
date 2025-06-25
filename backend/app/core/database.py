from motor.motor_asyncio import AsyncIOMotorClient
from app import APPCONF as cf
client = AsyncIOMotorClient(cf.db.uri)
from motor.motor_asyncio import AsyncIOMotorClient
import certifi


ca = certifi.where() # Use certifi to load the CA bundle

class MongoDBManager:
    def __init__(self, db_configs):
        self.client = None
        self.databases = {}
        self.db_configs = db_configs

    def connect(self):
        self.client = AsyncIOMotorClient(self.db_configs["MONGODB_URI"], tlsCAFile=ca)
        for module, db_name in self.db_configs["DATABASES"].items():
            self.databases[module] = self.client[db_name]

    def get_database(self, module_name: str):
        return self.databases.get(module_name)

    def close(self):
        if self.client:
            self.client.close()


# Database configuration
db_configs = {
    "MONGODB_URI": cf.db.uri,
    "DATABASES": {
        "user": cf.db.userdb,
        "certification": cf.db.certificationdb,
        "contactus": cf.db.contactusdb,
        "career": cf.db.careerdb,
        "popup": cf.db.popupdb,
    }
}

mongo_db_manager = MongoDBManager(db_configs)
