import os

basedir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'Sqlite/skinapp.db'))

# params = parse.quote_plus(os.environ["DB_CONN_STRING"])
#db_uri = f"postgresql://test:Test123!@localhost:5432/skintable"
db_uri = f"sqlite:///{basedir}'"

print(basedir)