from app import db
from datetime import datetime

class Skin(db.Model):
    __tablename__ = 'skins'

    id = db.Column(db.Integer, primary_key=True)
    skinname = db.Column(db.String(100))
    skinimg = db.Column(db.String(100))
    #RarityTier = db.Column(db.String(32))
    releasedate = db.Column(db.DateTime)
    rankingscore = db.Column(db.Integer)
    amountofwins = db.Column(db.Integer)
    amountoflosses = db.Column(db.Integer)
    #Champion_id = db.Column(db.Integer, db.ForeignKey('champions.id'), nullable=False)

    def __init__(self, id, skinname, skinimg):
        self.id = id
        self.skinname = skinname
        self.skinimg = skinimg
        #self.RarityTier = RarityTier
        self.releasedate = datetime.now()
        self.rankingscore = 1500
        self.amountofwins = 0
        self.amountoflosses = 0
        #self.Champion_id = Champion
