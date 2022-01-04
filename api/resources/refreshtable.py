from flask import request, jsonify
from app import db
from sqlalchemy import MetaData, Table
from .createtable import querytable, querychampions, querymatches
from flask_restful import Resource


class RefreshTable(Resource):    
    def get(self):
        db.session.execute(querytable())
        db.session.execute(querychampions())
        db.session.execute(querymatches())

        return jsonify({
        'Reload' : 'succesful'})

