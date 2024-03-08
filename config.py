import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = 'zhenyaandsanya'
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{basedir}/db/database.db'