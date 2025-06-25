from pydantic import BaseModel


class Project(BaseModel):
    name: str


class DataBaseConf(BaseModel):
    uri: str
    userdb: str
    certificationdb: str
    contactusdb: str
    careerdb: str
    popupdb: str

class AppConfigs(BaseModel):
    project: Project
    db: DataBaseConf

    @classmethod
    def load_config(cls, raw_configs):
        project = Project(name=raw_configs.get('project.name'))
        db = DataBaseConf(
            uri=raw_configs.get('db.uri'),
            userdb=raw_configs.get('db.userdb'),
            certificationdb=raw_configs.get('db.certificationdb'),
            contactusdb=raw_configs.get('db.contactusdb'),
            careerdb=raw_configs.get('db.careerdb'),
            popupdb=raw_configs.get('db.popupdb'),
        )

        return AppConfigs(project=project, db=db)
