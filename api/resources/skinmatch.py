from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
import numpy as np
import os
from flask import request, jsonify
from app import db

import logging

# @api.route('/<name>/<rar>')
# def index(name, rar):
#     champ = Champion(ChampName=name)
#     db.session.add(champ)
#     db.session.commit()
#     return '<h1>Added champ</h1>'
    
# @api.route('/')
# def hoofd():
#     return render_template(os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'frontend', 'public')) +  '\index.html')

class SkinMatchApi(Resource):
    def get(self):
        number1 = np.random.randint(1, 1050)
        number2 = np.random.randint(1, 1050)
        if number1 == number2 and number1 == 1049:
            number2 = 0
        elif number1 == number2:
            number2 += 1
        logging.critical(number1)
        logging.critical(number2)
        skin1 = Skin.query.get(number1)
        skin2 = Skin.query.get(number2)

        return jsonify({
        'first': {
            'id' : skin1.id,
            'skin' : skin1.SkinName, 
            'img' : skin1.SkinImg},
        'second': { 
            'id' : skin2.id,
            'skin' : skin2.SkinName, 
            'img' : skin2.SkinImg}
        })

    def post(self):
        winner = request.json['winnerid']
        loser = request.json['loserid']
        skinwin = Skin.query.get(winner)
        skinloss = Skin.query.get(loser)
        skinwin.RankingScore += 10
        skinwin.AmountOfWins += 1
        skinloss.RankingScore -= 10
        skinloss.AmountOfLosses -= 10
        db.session.commit()