from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/', method=['GET'])
def index():
    return jsonify({"message" : "It index"})