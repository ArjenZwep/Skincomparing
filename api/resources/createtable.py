def querytable():
    return f"""CREATE TABLE IF NOT EXISTS skins (
	id INT PRIMARY KEY,
	SkinName VARCHAR ( 100 ),
	SkinImg VARCHAR ( 100 ),
	ReleaseDate DATE,
	RankingScore INT,
    AmountOfWins INT,
    AmountOfLosses INT
);"""

        # meta = MetaData()
        # champs = Table('champions', meta,
        # sa.Column('id', sa.Integer(), nullable=False),
        # sa.Column('ChampName', sa.String(length=100), nullable=True),
        # sa.Column('AmountOfWins', sa.Integer(), nullable=True),
        # sa.Column('AmountOfLosses', sa.Integer(), nullable=True),
        # sa.PrimaryKeyConstraint('id')

def drop_matches():
    return f"""DROP TABLE matches"""        

def querymatches():
    return f"""CREATE TABLE IF NOT EXISTS matches (
	id VARCHAR ( 100 ) PRIMARY KEY,
	Skin_Id_Winner INT,
	Skin_Id_Loser INT,
	MatchDate DATE
	);"""

        # matches = Table('matches', meta,
        # sa.Column('id', sa.Integer(), nullable=False),
        # sa.Column('Skin_Id_Winner', sa.Integer(), nullable=True),
        # sa.Column('Skin_Id_Loser', sa.Integer(), nullable=True),
        # sa.Column('MatchDate', sa.DateTime(), nullable=True),
        # sa.PrimaryKeyConstraint('id')

def querychampions():
    return f"""CREATE TABLE IF NOT EXISTS champions (
	id INT PRIMARY KEY,
	ChampName VARCHAR ( 100 ),
	AmountOfWins INT,
	AmountOfLosses INT
	);"""