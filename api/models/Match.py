from app import db

class Match(db.Model):
    __tablename__ = 'matches'
    
    id = db.Column(db.Integer, primary_key=True)
    Skin_Id_1 = db.Column(db.Integer)
    Skin_Id_2 = db.Column(db.Integer)
    MatchDate = db.Column(db.DateTime)
    Skin_Id_1_Won = db.Column(db.Boolean)
    Skin_Id_2_Won = db.Column(db.Boolean)

    def __init__(self, Skin_Id_1, Skin_Id_2, Skin_Id_1_Won):
        self.Skin_Id_1 = Skin_Id_1
        self.Skin_Id_2 = Skin_Id_2
        self.Skin_Id_1_Won = Skin_Id_1_Won
        self.Skin_Id_2_Won = not Skin_Id_1_Won
        self.MatchDate = datetime.now()