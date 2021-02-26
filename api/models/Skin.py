from app import db
from datetime import datetime

class Skin(db.Model):
    __tablename__ = 'skins'

    id = db.Column(db.Integer, primary_key=True)
    SkinName = db.Column(db.String(100))
    SkinImg = db.Column(db.String(100))
    #RarityTier = db.Column(db.String(32))
    ReleaseDate = db.Column(db.DateTime)
    RankingScore = db.Column(db.Integer)
    AmountOfWins = db.Column(db.Integer)
    AmountOfLosses = db.Column(db.Integer)
    #Champion_id = db.Column(db.Integer, db.ForeignKey('champions.id'), nullable=False)

    def __init__(self, SkinName, SkinImg):
        self.SkinName = SkinName
        self.SkinImg = SkinImg
        #self.RarityTier = RarityTier
        self.ReleaseDate = datetime.now()
        self.RankingScore = 1500
        self.AmountOfWins = 0
        self.AmountOfLosses = 0
        #self.Champion_id = Champion
