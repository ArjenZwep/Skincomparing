from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
import numpy as np
import os
from flask import request, jsonify
from app import db
import csv


import logging

class RefreshData(Resource):
    def get(self):
        tables = ['skins', 'champions', 'matches']

        #truncate previous data
        db.session.execute(f'TRUNCATE {", ".join(str(x) for x in tables)} RESTART IDENTITY;')

        #load in Champion data
        with open("champions.csv", "r") as f:
            reader = csv.reader(f)
            for row in reader:
                champion_data = Champion(row[0])
                db.session.add(champion_data)
                db.session.commit()

        #load in Skin data
        with open("/Users/arjen.zwep/Programs/skincompare/Skincomparing/api/resources/skinsgoed.csv", "r") as j:
            reader = csv.reader(j)
            next(reader, None)
            for row in reader:
                skin_data = Skin(row[1], f'https://www.mobafire.com{row[2]}')
                db.session.add(skin_data)
                db.session.commit()
        return jsonify({
            'Dataload': 'succesvol'
        })

