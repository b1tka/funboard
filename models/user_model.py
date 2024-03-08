from extensions import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    surname = db.Column(db.String)
    password = db.Column(db.String)


