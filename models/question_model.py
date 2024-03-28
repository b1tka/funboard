from extensions import db


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'))

    options = db.relationship('OptionUnit', backref='question', cascade='all,delete', lazy=True)
