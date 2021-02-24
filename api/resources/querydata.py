from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
import numpy as np
import os
from flask import request, jsonify
from app import db
import csv


import logging

class QueryData(Resource):
    def get(self):

        return jsonify({
            'Dataload': 'succesvol'
        })

