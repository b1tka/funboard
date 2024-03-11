from flask import Flask, render_template, redirect, url_for
from flask_login import LoginManager, login_required, login_user, logout_user
from flask_sqlalchemy import SQLAlchemy

from extensions import db
from config import Config

from models.user_model import User
from models.task_model import Task
from models.result_model import Result
from models.question_model import Question
from models.category_model import Category

from forms.login_form import LoginForm
from forms.register_form import RegisterForm

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
with app.app_context():
    db.create_all()
login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.filter_by(id=user_id).first()


@app.route('/index')
@app.route('/')
def index():
    return render_template('base.html')


@app.route('/register', methods=['POST', 'GET'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        user = User(
            email=form.email.data,
            name=form.first_name.data,
            surname=form.second_name.data
        )
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html', form=form)


@app.route('/login', methods=['POST', 'GET'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user: User = User.query.filter_by(email=form.email.data).first()
        if user:
            if user.check_password(form.password.data):
                login_user(user)
                return redirect(url_for('index'))
    return render_template('login.html', form=form)


@app.route('/main')
@login_required
def main():
    return '''main'''


@login_required
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))


@app.route('/leaderboard')
def leaderboard():
    return '''leaderboard'''


if __name__ == '__main__':
    app.run(port=8080, debug=True)

