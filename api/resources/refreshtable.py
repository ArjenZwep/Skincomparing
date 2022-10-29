from flask import request, jsonify
from app import db
from sqlalchemy import MetaData, Table
from .createtable import querytable, querychampions, querymatches, drop_matches
from flask_restful import Resource


class RefreshTable(Resource):    
    def get(self):
        db.session.execute(querytable())
        db.session.commit()
        db.session.execute(querychampions())
        db.session.commit()
        db.session.execute(drop_matches())
        db.session.commit()
        db.session.execute(querymatches())
        db.session.commit()


        return jsonify({
        'Reload' : 'succesful'})

