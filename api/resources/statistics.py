from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
from models.Match import Match
from .fiderating import expected, elo
import numpy as np
from flask import request, jsonify
from app import db
from sqlalchemy import desc



class LoadStats(Resource):
    #Querys the 2 random skins needed to be shown
    def get(self):
        skin1 = Skin.query.order_by(desc('rankingscore'))
        skin2 = Skin.query.order_by(desc('amountofwins'))
        names = []
        scores = []
        wins_names = []
        wins = []
        count = 0
        for result in skin1:
            names.append(result.skinname)
            scores.append(result.rankingscore)
            count += 1
            if count == 5:
                count = 0
                break
        for result2 in skin2:
            wins.append(result2.amountofwins)
            wins_names.append(result2.skinname)
            count += 1
            if count == 5:
                break
        return jsonify({
            'top5_name': names,
            'top5_score' : scores,
            'top5_wins_names' : wins_names,
            'top5_wins' : wins
                    })

if __name__ == "__main__":
    skin1 = Skin.query.order_by(rankingscore)
    #skin2 = Skin.query.filter_by(id=number2).first()
    print(skin1)
