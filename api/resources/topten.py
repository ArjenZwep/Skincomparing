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
        count = 0
        for query in qry:
            ten_list[count + 1] = [qry[count].SkinName, qry[count].RankingScore]
            count += 1
        return jsonify(ten_list)

