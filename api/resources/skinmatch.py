from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
from models.Match import Match
from .fiderating import expected, elo
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
    #Querys the 2 random skins needed to be shown
    def get(self):
        number1 = np.random.randint(1, 1050)
        number2 = np.random.randint(1, 1050)
        if number1 == number2 and number1 == 1049:
            number2 = 0
        elif number1 == number2:
            number2 += 1
        logging.critical(number1)
        logging.critical(number2)
        skin1 = Skin.query.filter_by(id=number1).first()
        skin2 = Skin.query.filter_by(id=number2).first()
        return jsonify({
            'skin1name': skin1.skinname,
            'skin1img': skin1.skinimg,
            'skin1id': skin1.id,
            'skin2name': skin2.skinname,
            'skin2img': skin2.skinimg,
            'skin2id': skin2.id,
        })

    def post(self):
        #Gets the json from the frontend
        loser = request.args.get("loserId")
        winner = request.args.get("winnerId")

        #Querys skins from database
        skinLoss = Skin.query.get(loser)
        skinWin = Skin.query.get(winner)

        #calculates new fide rating
        eloWinner = elo(skinWin.RankingScore, expected(skinWin.RankingScore, skinLoss.RankingScore), 1)
        eloLoser = elo(skinLoss.RankingScore, expected(skinLoss.RankingScore, skinWin.RankingScore), 0)

        #update data for skins
        skinWin.RankingScore = eloWinner
        skinWin.AmountOfWins += 1
        skinLoss.RankingScore = eloLoser
        skinLoss.AmountOfLosses += 1

        #input matchdata
        match_data = Match(int(skinWin.id), int(skinLoss.id))
        db.session.add(match_data)
        db.session.commit()
        return 'Update succesful'