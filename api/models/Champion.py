from app import db
from datetime import datetime

#note: Alles relationenen wat bij elkaar hoort        
class Champion(db.Model):
    __tablename__ = 'champions'

    id = db.Column(db.Integer, primary_key=True)
    ChampName = db.Column(db.String(100))
    #Skins = db.relationship('Skin', backref='champion', lazy=True)
    #ReleaseDate = db.Column(db.DateTime)
    AmountOfWins = db.Column(db.Integer)
    AmountOfLosses = db.Column(db.Integer)
    #AmountOfSkins = db.Column(db.Integer)

    def __init__(self, ChampName):
        self.ChampName = ChampName
        #self.Skins = Skins
        #self.RarityTier = RarityTier
        #self.ReleaseDate = datetime.now() #aanpassen, ook score voor standaard score
        #self.RankingScore = 0
        self.AmountOfWins = 0
        self.AmountOfLosses = 0
        #self.AmountOfSkins = len(Skins)