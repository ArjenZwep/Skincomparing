from app import db
#db.create_all()
from app import Champion
from app import Skin
#champion_test = Champion('Annie')
#skin_test
#db.session.add(champion_test)
#db.session.commit()'''

skin_test = Skin('Annie_classic', 'linkje', 1350, 1)

db.session.add(skin_test)
db.session.commit()