from flask import Flask, request, jsonify, render_template
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
import os
import sqlite3
import numpy as np

import logging
import config

api = Api()
dbdir = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'Sqlite'))

db = SQLAlchemy()
migrate = Migrate()
ma = Marshmallow()

def create_app():
    app = Flask(__name__)
    app.config.from_object(config.by_name[os.getenv("FLASK_ENV", "dev")])
    
    from resources.skinmatch import SkinMatchApi
    api.add_resource(SkinMatchApi, '/skin')
    from resources.loaddata import RefreshData
    api.add_resource(RefreshData, '/load')
    from resources.topten import TopTen
    api.add_resource(TopTen, '/topten')

    api.init_app(app)
    db.init_app(app)
    ma.init_app(app)

    from models.Champion import Champion
    from models.Match import Match
    from models.Skin import Skin

    migrate.init_app(app, db)

    # params = parse.quote_plus(os.environ["DB_CONN_STRING"])
    # db_uri = f"postgresql://test:Test123!@localhost:5432/skintable"

    return app


if __name__ == '__main__':
    app = create_app()
    logging.critical("Created APP")
    app.run(host='0.0.0.0', port=5000)

