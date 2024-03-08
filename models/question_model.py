from extensions import db


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    correct = db.Column(db.Boolean)

    task_id = db.Column(db.Integer, db.ForeignKey('task.id'))
    task = db.relationship('Task', backref=db.backref('questions', lazy='dynamic'))
