from extensions import db


class OptionUnit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    is_correct = db.Column(db.Boolean)

    question_id = db.Column(db.Integer, db.ForeignKey('question.id'))



