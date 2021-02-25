from app import db
from datetime import datetime

class Match(db.Model):
    __tablename__ = 'matches'
    
    id = db.Column(db.Integer, primary_key=True)
    Skin_Id_1 = db.Column(db.Integer)
    Skin_Id_2 = db.Column(db.Integer)
    MatchDate = db.Column(db.DateTime)

    def __init__(self, Skin_Id_Winner, Skin_Id_Loser):
        self.Skin_Id_Winner = Skin_Id_Winner
        self.Skin_Id_Loser = Skin_Id_Loser
        self.MatchDate = datetime.now()