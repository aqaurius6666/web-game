from flask import Flask, jsonify
from .database.model import db

app = Flask(__name__)
db.init_app(app)
HEROKU = "config_heroku.py"
LOCAL = "config_local.py"
app.config.from_pyfile(HEROKU)
@app.route('/', methods=['GET'])
def index():
    return jsonify({"message" : "It index"})

@app.route('/database/create', methods=['GET'])
def create_table():
    db.drop_all()
    db.create_all()
    return jsonify({"message" : "Create all table successfully!"}), 200
