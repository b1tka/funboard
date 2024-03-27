from extensions import db


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)

    tasks = db.relationship('Task', backref='category', lazy=True)