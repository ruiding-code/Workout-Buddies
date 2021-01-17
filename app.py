from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userdata.db'
db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.String(120), primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Users %r>' % self.id


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        user_name = request.form['name']
        new_user = Users(name=user_name)

        try:
            db.session.add(new_user)
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue adding an user'
    else:
        all_users = Users.query
        return render_template('index.html', task=all_users)


@app.route('/delete/<string:id>')
def delete(id):
    user_to_delete = Users.query.get_or_404(id)

    try:
        db.session.delete(user_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'Problem deleting user'


@app.route('/update/<string:id>', methods=['GET', 'POST'])
def update(id):
    user = Users.query.get_or_404(id)

    if request.method == 'POST':
        user.name = request.form['name']

        try:
            db.session.commit()
            return redirect('/')

        except:
            return 'Update issue'

    else:
        return render_template('update.html', task=user)


if __name__ == "__main__":
    app.run(debug=True)



