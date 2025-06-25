from dotenv import load_dotenv
from envyaml import EnvYAML
from loguru import logger
from app.core.settings import AppConfigs
import os

load_dotenv()
environment = os.environ.get("environment","dev")
logger.info(f"Loading config...")

logger.info(f"Reading common config...")
raw_configs = dict(EnvYAML('env_conf/application.yml'))
env_specific_configs = {}

match environment:
    case "local":
        logger.info(f"Using local config...")
        env_specific_configs = dict(EnvYAML('env_conf/application.local.yml'))
    case "dev":
        logger.info(f"Using development config...")
        env_specific_configs = dict(EnvYAML('env_conf/application.dev.yml'))
    case _:
        logger.info(f"Using development config...")
        env_specific_configs = dict(EnvYAML('env_conf/application.yml'))

merged_configs = {**raw_configs, **env_specific_configs}


APPCONF: AppConfigs = AppConfigs.load_config(merged_configs)
logger.info(f"Config is loaded...")