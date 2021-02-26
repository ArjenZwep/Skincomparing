from app import db
from datetime import datetime

class Match(db.Model):
    __tablename__ = 'matches'
    
    id = db.Column(db.Integer, primary_key=True)
    skin_id_winner = db.Column(db.Integer)
    skin_id_loser = db.Column(db.Integer)
    matchdate = db.Column(db.DateTime)

    def __init__(self, skin_id_winner, skin_id_loser):
        self.skin_Id_winner = skin_id_winner
        self.skin_Id_loser = skin_id_loser
        self.matchdate = datetime.now()