from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
import numpy as np
import os
from flask import request, jsonify
from app import db
import csv


import logging

class LoadData(Resource):
    def get(self):
        with open("champions.csv", "r") as f:
            reader = csv.reader(f)
            for row in reader:
                champion_test = Champion(row)
                db.session.add(champion_test)
                db.session.commit()
        return jsonify({
            'Dataload': 'succesvol'
        })

