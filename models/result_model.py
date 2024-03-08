from extensions import db


class Result(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref=db.backref('results', lazy='dynamic'))
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'))
    task = db.relationship('Task', backref=db.backref('results', lazy='dynamic'))