from flask import Flask, render_template, redirect, url_for, jsonify
from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy

from extensions import db
from config import Config

from models.user_model import User
from models.task_model import Task
from models.result_model import Result
from models.question_model import Question
from models.category_model import Category
from models.option_unit_model import OptionUnit

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


@app.route('/api/get_category/<int:category_id>')
@login_required
def get_train(category_id):

    def modify_task(task: Task):

        def modify_question(question: Question):

            def modify_options(option: OptionUnit):
                result = {
                    'id': option.id,
                    'text': option.text,
                    'is_correct': option.is_correct
                }

                return result

            result = {
                'id': question.id,
                'text': question.text,
                'options': list(map(modify_options, question.options))
            }

            return result

        if task.type == 'information':
            result = {
                'id': task.id,
                'name': task.name,
                'content': task.content,
                'type': task.type,
                'result': any(list(filter(lambda x: x.user == current_user, task.results)))
            }
        elif task.type == 'question':
            result = {
                'id': task.id,
                'name': task.name,
                'content': task.content,
                'type': task.type,
                'result': any(list(filter(lambda x: x.user == current_user, task.results))),
                'question': list(map(modify_question, task.questions))
            }

        return result

    query = db.session.execute(db.select(Category).filter_by(id=category_id)).scalar_one()
    json = list(map(modify_task, query.tasks))
    return jsonify(json)


@app.route('/api/task_completed/<int:task_id>')
@login_required
def task_completed(task_id):
    if not Result.query.filter_by(task_id=task_id, user_id=current_user.id).first():
        result = Result(
            task_id=task_id,
            user_id=current_user.id
        )
        db.session.add(result)
        db.session.commit()

    return jsonify({'status': 'ok'}), 200


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
    task = Task(
        name='Что такое клавиатура',
        content='''Клавиатура — это устройство, позволяющее пользователю вводить информацию в компьютер. Она представляет собой набор клавиш (кнопок), расположенных в определённом порядке. Клавиатура используется для следующих целей:
    Ввод данных: Пользователь нажимает клавиши, чтобы ввести буквы, цифры и знаки в компьютер. Это основной способ взаимодействия с текстовыми программами, редакторами и веб-страницами.
    Управление системой: Клавиатура является аналогом компьютерной мыши. С помощью неё можно перемещаться по меню, выбирать опции, запускать приложения и выполнять другие действия.''',
        type='information',
        category_id=1
    )
    db.session.add(task)
    task = Task(
        name='Вопросы по типам клавиш',
        content='Справочная информация',
        type='question',
        category_id=1,
        questions=[
            Question(
                text='Какой тип отвечает за набор текста?',
                options=[
                    OptionUnit(
                        text='Клавиши печати',
                        is_correct=True
                    ),
                    OptionUnit(
                        text='Клавиши контроля',
                        is_correct=False
                    ),
                    OptionUnit(
                        text='Клавиши навигации',
                        is_correct=False
                    )
                ]
            ),
            Question(
                text='Какой тип отвечает за управление курсором?',
                options=[
                    OptionUnit(
                        text='Клавиши печати',
                        is_correct=False
                    ),
                    OptionUnit(
                        text='Клавиши контроля',
                        is_correct=False
                    ),
                    OptionUnit(
                        text='Клавиши навигации',
                        is_correct=True
                    )
                ]
            )
        ]
    )
    db.session.add(task)
    db.session.commit()
    return '''leaderboard'''


if __name__ == '__main__':
    app.run(port=8080, debug=True)



