from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Account(db.Model):

    username = db.Column(db.String(36), primary_key=True)
    password = db.Column(db.String(126))
    uid = db.Column(db.String(36), db.ForeignKey('info.uid'))

class Info(db.Model):

    uid = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(64, convert_unicode=True))

