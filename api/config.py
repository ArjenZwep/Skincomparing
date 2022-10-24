import os
from urllib import parse

basedir = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'Sqlite/skinapp.db'))

# params = parse.quote_plus(os.environ["DB_CONN_STRING"])
db_uri = f"postgresql://test:Test123!@localhost:5432/skintable"
#db_uri = f"postgresql://test:Test123!@host.docker.internal:5432/skintable"
#db_uri = f"sqlite:///{basedir}"

class Config:
    DEBUG = True
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
