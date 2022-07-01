from flask_restful import Resource
from models.Champion import Champion
from models.Skin import Skin
import numpy as np
import os
from flask import request, jsonify
from app import db
import csv
import sqlalchemy as sa
from alembic import op
from sqlalchemy import MetaData, Table
import logging
from .createtable import querytable, querychampions, querymatches

class RefreshData(Resource):    
    def get(self):
        # meta = MetaData()
        # champs = Table('champions', meta,
        # sa.Column('id', sa.Integer(), nullable=False),
        # sa.Column('ChampName', sa.String(length=100), nullable=True),
        # sa.Column('AmountOfWins', sa.Integer(), nullable=True),
        # sa.Column('AmountOfLosses', sa.Integer(), nullable=True),
        # sa.PrimaryKeyConstraint('id')
        # )
        # matches = Table('matches', meta,
        # sa.Column('id', sa.Integer(), nullable=False),
        # sa.Column('Skin_Id_Winner', sa.Integer(), nullable=True),
        # sa.Column('Skin_Id_Loser', sa.Integer(), nullable=True),
        # sa.Column('MatchDate', sa.DateTime(), nullable=True),
        # sa.PrimaryKeyConstraint('id')
        # )
        # skins = Table('skins', meta,
        # sa.Column('id', sa.Integer(), nullable=False),
        # sa.Column('SkinName', sa.String(length=100), nullable=True),
        # sa.Column('SkinImg', sa.String(length=100), nullable=True),
        # sa.Column('ReleaseDate', sa.DateTime(), nullable=True),
        # sa.Column('RankingScore', sa.Integer(), nullable=True),
        # sa.Column('AmountOfWins', sa.Integer(), nullable=True),
        # sa.Column('AmountOfLosses', sa.Integer(), nullable=True),
        # sa.PrimaryKeyConstraint('id')
        # )
        # skins.create(db)

        tables = ['skins', 'champions', 'matches']

        #truncate previous data
        try:
            db.session.execute(f'TRUNCATE {", ".join(str(x) for x in tables)} RESTART IDENTITY;')
        except:
            db.session.rollback()
        db.session.commit()
        #load in Champion data
        # with open("champions.csv", "r") as f:
        #     reader = csv.reader(f)
        #     for row in reader:
        #         champion_data = Champion(row[0])
        #         db.session.add(champion_data)
        #         db.session.commit()

        #load in Skin data
        import os.path
        import sys
        with open("resources/skinsgoed.csv", "r") as j:
            reader = csv.reader(j)
            next(reader, None)
            count = 0
            for row in reader:
                #print(f'hallo dit is de roow zie hem {row}')
                skin_data = Skin(count, row[1], f'https://www.mobafire.com{row[2]}')
                db.session.add(skin_data)
                db.session.commit()
                count += 1
        return jsonify({
            'SkinName': 'Dark Cosmic Lux',
            'SkinImage' : '/images/champion/skins/portrait/lux-dark-cosmic.jpg'
        })

