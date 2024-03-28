from extensions import db


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    content = db.Column(db.String)
    type = db.Column(db.Integer)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))

    results = db.relationship('Result', backref='task', cascade='all,delete', lazy=True)
    questions = db.relationship('Question', backref='task', cascade='all,delete', lazy=True)
