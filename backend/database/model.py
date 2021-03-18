from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Account(db.Model):
    __table_name__ = 'account'
    uid = db.Column(db.String(36), primary_key=True)
    username = db.Column(db.String(36))
    password = db.Column(db.String(126))
    

    def to_dict(self):
        return {
            'uid' : self.uid,
            'username' : self.username
        }

class UserInfo(db.Model):
    __table_name__ = 'user_info'
    uid = db.Column(db.String(36),  db.ForeignKey('account.uid'), primary_key=True)
    name = db.Column(db.String(64, convert_unicode=True))
    def to_dict(self):
        return {
            'uid' : self.uid,
            'name' : self.name
        }
class Liked(db.Model):
    __table_name__ = 'liked'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uid = db.Column(db.String(36),  db.ForeignKey('account.uid'))
    gid = db.Column(db.String(5),  db.ForeignKey('game.gid'))
    def to_dict(self):
        return {
            'uid' : self.uid,
            'gid' : self.gid
        }
class Game(db.Model):
    __table_name__ = 'game'
    gid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45, convert_unicode=True))
    def to_dict(self):
        return {
            'gid' : self.gid,
            'name' : self.name
        }
class GameTagged(db.Model):
    __table_name__ = 'game_tagged'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    gid = db.Column(db.Integer, db.ForeignKey('game.gid'))
    tid = db.Column(db.Integer, db.ForeignKey('tag.tid'))
    def to_dict(self):
        return {
            'gid' : self.gid,
            'tid' : self.tid
        }
class Tag(db.Model):
    __table_name__ = 'tag'
    tid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45, convert_unicode=True))
    def to_dict(self):
        return {
            'tid' : self.tid,
            'name' : self.name
        }
class Comment(db.Model):
    __table_name__ = 'comment'
    cid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    gid = db.Column(db.String(5), db.ForeignKey('game.gid'))
    time = db.Column(db.TIMESTAMP, default=datetime.utcnow)
    author = db.Column(db.String(36), db.ForeignKey('account.uid'))
    body = db.Column(db.UnicodeText)
    def to_dict(self):
        return {
            'cid' : self.cid,
            'gid' : self.gid,
            'time' : self.time,
            'author' : self.author,
            'body' : self.body
        }