from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.schema import ForeignKey, Column, PrimaryKeyConstraint
from sqlalchemy.sql.sqltypes import Integer, String, TIMESTAMP, UnicodeText



db = SQLAlchemy()

class Account(db.Model):
    __table_name__ = 'account'
    uid = Column(String(36), primary_key=True)
    username = Column(String(36))
    password = Column(String(126))
    

    def to_dict(self):
        return {
            'uid' : self.uid,
            'username' : self.username
        }

class UserInfo(db.Model):
    __table_name__ = 'user_info'
    uid = Column(String(36),  ForeignKey('account.uid'), primary_key=True)
    name = Column(String(64, convert_unicode=True))
    def to_dict(self):
        return {
            'uid' : self.uid,
            'name' : self.name
        }
class Liked(db.Model):
    __table_name__ = 'liked'
    id = Column(Integer, primary_key=True, autoincrement=True)
    uid = Column(String(36),  ForeignKey('account.uid'))
    gid = Column(Integer,  ForeignKey('game.gid'))
    def to_dict(self):
        return {
            'uid' : self.uid,
            'gid' : self.gid
        }
class Game(db.Model):
    __table_name__ = 'game'
    gid = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(128, convert_unicode=True))
    image = Column(String(128), nullable=True)
    link = Column(String(128), nullable=True)
    ytl = Column(String(16), nullable=True)

    def to_dict(self):
        return {
            'gid' : self.gid,
            'name' : self.name,
            'image' : self.image,
            'link' : self.link,
            'ytl' : self.ytl
        }

class GamePlatform(db.Model):
    __table_name__ = 'game_platform'
    gid = Column(Integer, ForeignKey('game.gid'))
    platform = Column(String(16, convert_unicode=True), nullable=False)
    __table_args__ = (
        PrimaryKeyConstraint('gid', 'platform'),
        {},
    )
class GameTagged(db.Model):
    __table_name__ = 'game_tagged'
    id = Column(Integer, primary_key=True, autoincrement=True)
    gid = Column(Integer, ForeignKey('game.gid'))
    tid = Column(Integer, ForeignKey('tag.tid'))
    def to_dict(self):
        return {
            'gid' : self.gid,
            'tid' : self.tid
        }
class Tag(db.Model):
    __table_name__ = 'tag'
    tid = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(45, convert_unicode=True))
    def to_dict(self):
        return {
            'tid' : self.tid,
            'name' : self.name
        }
class Comment(db.Model):
    __table_name__ = 'comment'
    cid = Column(Integer, primary_key=True, autoincrement=True)
    gid = Column(Integer, ForeignKey('game.gid'))
    time = Column(TIMESTAMP, default=datetime.utcnow)
    author = Column(String(36), ForeignKey('account.uid'))
    body = Column(UnicodeText)
    def to_dict(self):
        return {
            'cid' : self.cid,
            'gid' : self.gid,
            'time' : self.time,
            'author' : self.author,
            'body' : self.body
        }