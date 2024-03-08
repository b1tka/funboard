from flask import Flask
from flask_login import LoginManager, login_required
from flask_sqlalchemy import SQLAlchemy

from extensions import db
from config import Config

from models.user_model import User
from models.task_model import Task
from models.result_model import Result
from models.question_model import Question
from models.category_model import Category


app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
with app.app_context():
    db.create_all()
login_manager = LoginManager()
login_manager.init_app(app)


@app.route('/index')
@app.route('/')
def index():
    return '''123'''


@app.route('/login')
def login():
    return '''login'''


@app.route('/main')
@login_required
def main():
    return '''main'''


@app.route('/leaderboard')
def leaderboard():
    return '''leaderboard'''


if __name__ == '__main__':
    app.run(port=8080, debug=True)

