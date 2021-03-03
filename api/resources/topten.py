from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
from flask import request, jsonify
from app import db
import csv

from sqlalchemy import desc


class TopTen(Resource):
    def get(self):
        qry = Skin.query.order_by(desc(Skin.RankingScore)).limit(10)
        ten_list = {}
        array_name = []
        array_score = []
        for query in qry:
            array_name.append(query.SkinName)
            array_score.append(query.RankingScore)
        ten_list["names"] = array_name
        ten_list["scores"] = array_score
        return jsonify(ten_list)

