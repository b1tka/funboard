from extensions import db
from werkzeug.security import generate_password_hash,  check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    surname = db.Column(db.String)
    password = db.Column(db.String)

    results = db.relationship('Result', backref='user', cascade='all,delete', lazy=True)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
