from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import flask_sqlalchemy
from flask_marshmallow import flask_marshmallow
import os

#Init app and rest
app = Flask(__name__)
api = Api(app)
dbdir = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'Sqlite'))

'''Database is innited in app, bad practice needs to be moved to seperate create dbfile'''
#Database
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{dbdir}/skinapp.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#init db
db = SQLAlchemy(app)

#init ma
ma = Marshmallow(app)

# creating tables
# Note: still need to make defined catogery's for api
class Skin(db.model):
    id = db.Column(db.Integer, primary_key=True)
    SkinName = db.Column(db.String(100), unique=True)
    SkinImg = db.Column(db.String(100), unique=True)
    RarityTier = db.column(db.String(32))
    ReleaseDate = db.column(db.DateTime)
    RankingScore = db.column(db.Integer)
    AmountOfWins = db.column(db.Integer)
    AmountOfLosses = db.column(db.Integer)
    Champion_id = db.Column(db.Integer, db.ForeignKey('champion.id'), nullable=False)

    def __init__(self, SkinName, SkinImg, RarityTier, ReleaseDate, RankingScore, AmountOfWins, AmountOfLosses, Champion)
        self.SkinName = SkinName
        self.SkinImg = SkinImg
        self.RarityTier = RarityTier
        self.ReleaseDate = ReleaseDate
        self.RankingScore = RankingScore
        self.AmountOfWins = AmountOfWins
        self.AmountOfLosses = AmountOfLosses
        self.Champion = Champion

#note: Alles relationenen wat bij elkaar hoort        
class Champion(db.model):
    id = db.Column(db.Integer, primary_key=True)
    ChampName = db.Column(db.String(100), unique=True)
    Skins = db.relationship('Skin', backref='champion', lazy=True)
    ReleaseDate = db.column(db.DateTime)
    AmountOfWins = db.column(db.Integer)
    AmountOfLosses = db.column(db.Integer)
    AmountOfSkins = db.column(db.Integer)

    def __init__(self, ChampName, Skins)
        self.ChampName = ChampName
        self.Skins = Skins
        self.RarityTier = RarityTier
        self.ReleaseDate = datetime.datetime.now() #aanpassen, ook score voor standaard score
        self.RankingScore = 0
        self.AmountOfWins = 0
        self.AmountOfLosses = 0
        self.AmountOfSkins = len(Skins)


class Match(db.model):
    id = db.Column(db.Integer, primary_key=True)
    Skin_Id_1 = db.Column(db.Integer)
    Skin_Id_2 = db.relationship(db.Integer)
    MatchDate = db.column(db.DateTime)
    Skin_Id_1_Won = db.column(db.Boolean)
    Skin_Id_2_Won = db.column(db.Boolean)

    def __init__(self, Skin_Id_1, Skin_Id_2, Skin_Id_1_Won)
        self.Skin_Id_1 = Skin_Id_1
        self.Skin_Id_2 = Skin_Id_2
        self.Skin_Id_1_Won = Skin_Id_1_Won
        self.Skin_Id_2_Won = not Skin_Id_1_Won
        
#Schema
class SkinsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'SkinName', 'SkinImg', 'RarityTier', 'ReleaseDate', 'RankingScore', 'AmountOfWins', 'AmountOfLosses')

#init schema
skin_schema = SkinSchema(strict=True)

if __name__ == '__main__':
    app.run(debug=True)