import os
from urllib import parse

basedir = os.path.abspath(os.path.dirname(__file__))

# params = parse.quote_plus(os.environ["DB_CONN_STRING"])
db_uri = f"postgresql://test:Test123!@skinselector_database/skintable"

class Config:
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = os.getenv("SECRET_KEY", "$SECRET_KEY not set")
    SQLALCHEMY_DATABASE_URI = db_uri
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    FLASK_APP = os.getenv("FLASK_APP")


class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = True
    DEVELOPMENT = True
    SQLALCHEMY_DATABASE_URI = db_uri


class ProductionConfig(Config):
    DEBUG = False
    DEVELOPMENT = False

by_name = {
    "dev":DevelopmentConfig,
    "prod":ProductionConfig
}
