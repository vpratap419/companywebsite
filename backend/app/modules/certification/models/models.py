from pydantic import BaseModel
from datetime import date

class CertificationForm(BaseModel):
    fullname: str
    coursename: str
    completiondate: date
    enrolleddegree: str

