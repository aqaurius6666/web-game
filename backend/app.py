from flask import Flask, jsonify
from flask.globals import request
from .database.model import *
from uuid import uuid4
from werkzeug.security import generate_password_hash, check_password_hash
from random import choice
from functools import wraps
import jwt
from .utilities import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
HEROKU = "config_heroku.py"
LOCAL = "config_local.py"
app.config.from_pyfile(HEROKU)
db.init_app(app)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if "x-access-token" in request.headers:
            token = request.headers['x-access-token']
        
        if not token:
            return jsonify({"message" : "No token"}), 401
        data = None
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms="HS256")
        except:
            return jsonify({"message" : "Token is invalid"}), 401
        acc = Account.query.filter_by(uid = data['uid']).first()
        if acc:
            return f(acc, *args, **kwargs)
        else:
            return jsonify({"message" : "Token is expired"}), 401
        
    return decorated
@app.route('/', methods=['GET'])
def index():
    return jsonify({"message" : "It index"})

#-----------------------------------------------------------------------------------------------------------------
# Testing methods
#-----------------------------------------------------------------------------------------------------------------

@app.route('/api/test', methods=['GET'])
def add_like():
    game = choice(Game.query.all())
    account = choice(Account.query.all())
    gamelike = Liked(uid=account.uid, gid=game.gid)
    db.session.add(gamelike)
    db.session.commit()
    return jsonify({'message' : 'successfully!'}), 200

@app.route('/api/likes', methods=['GET'])
def get_all_likes():
    array = db.session.query(Account, Liked, Game).filter(Account.uid==Liked.uid)\
                    .select_from(Game).join(Game).filter(Liked.gid==Game.gid).order_by(Game.gid).all()
    print(array)
    return {}

#-----------------------------------------------------------------------------------------------------------------
# Authentication methods
#-----------------------------------------------------------------------------------------------------------------
@app.route('/api/authentication', methods=['POST'])
def login():
    '''
        input: {'username' :
                'password' : 
                }
    '''
    data = request.json
    account = Account.query.filter_by(username=data['username']).first()
    if account:
        if check_password_hash(account.password, data['password']):
            return jsonify({'message' : 'Login successfully!', 
                            'token' : encode_auth_token(account.uid, app.config['SECRET_KEY']),
                            'account' : account.to_dict()}), 200
    else:
        return jsonify({'message' : 'Username or password is invalid!'}), 400

@app.route('/api/account', methods=['GET'])
@token_required
def get_account(current):
    return jsonify({'account' : current.to_dict()}), 200

#-----------------------------------------------------------------------------------------------------------------
# Create methods
#-----------------------------------------------------------------------------------------------------------------
@app.route('/api/accounts', methods=['POST'])
def create_account():
    '''
        input: {'username' :
                'password' : 
                }
    '''
    data = request.json
    try:
        uid = str(uuid4())
        account = Account(uid=uid,
                        username=data['username'],
                        password=generate_password_hash(data['password'], method='sha256'))
        db.session.add(account)
        db.session.commit()
        user = UserInfo(uid=uid, name=data['username'])
        db.session.add(user)
        db.session.commit()
        return jsonify({'message' : 'Create successfully!'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message' : 'Error'}), 400

@app.route('/api/games', methods=['POST'])
def create_game():
    '''
        input: {'gid' : string(5)
                'name' :
                'tags' : list [{'name' : }, ] 
                }
    '''
    data = request.json
    if 'is_list' in data.keys():
        # data có mảng
        for each in data['array']:
            if not create_one_game(each):
                print(each)
    else:
        create_one_game(data)

    return jsonify({'message' : 'Create successfully!'}), 201
  

def create_one_game(data):
    try:
        game = Game.query.filter_by(name=data['name']).first()
        if not game:
            ## tạo 1 game mới
            game = Game(name=data['name'], image=data['image'], link=data['link'])
            db.session.add(game)
            db.session.commit()
            for each in data['platforms']:
                game = Game.query.filter_by(name=data['name']).first()
                platform = GamePlatform.query.filter_by(platform=each, gid=game.gid).first() # Kiểm tra trong db có platform chưa
                if not platform:
                    platform = GamePlatform(gid=game.gid, platform=each) # chưa có platform thì thêm platform mới
                    db.session.add(platform)
                    db.session.commit()

            for name_tag in data['tags']:
                tag = Tag.query.filter_by(name=name_tag).first() # Kiểm tra trong db có tag chưa
                if not tag:
                    tag = Tag(name=name_tag) # chưa có tag thì thêm tag mới
                    db.session.add(tag)
                    db.session.commit()

                row = GameTagged(gid=game.gid, tid=tag.tid)
                db.session.add(row)

            db.session.commit()
        else:
            ## update các tags
            for name_tag in data['tags']:
                tag = Tag.query.filter_by(name=name_tag).first() # Kiểm tra trong db có tag chưa
                if not tag:
                    tag = Tag(name=name_tag) # chưa có tag thì thêm tag mới
                    db.session.add(tag)
                    db.session.commit()
                # Kiểm tra xem game cũ đã gắn tag chưa
                if GameTagged.query.filter_by(gid=game.gid, tid = tag.tid).first():
                    pass
                else:
                    row = GameTagged(gid=game.gid, tid=tag.tid)
                    db.session.add(row)

                db.session.commit()
    except Exception as e:
        print(e)
        return False

    return True
@app.route('/api/tags', methods=['POST'])
def create_tag():
    '''
        input: {'name' : }
    '''
    data = request.json
    try:
        type = Tag(name=data['name'])
        db.session.add(type)
        db.session.commit()
        return jsonify({'message' : 'Create successfully!'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message' : 'Error'}), 400


#-----------------------------------------------------------------------------------------------------------------
# Get methods
#-----------------------------------------------------------------------------------------------------------------
@app.route('/api/accounts/info', methods=['GET'])
def get_full_info():
    array = db.session.query(Account, UserInfo).join(UserInfo).filter(Account.uid==UserInfo.uid).all()
    return jsonify({'array' : [{**each.Account.to_dict(), **each.UserInfo.to_dict()} for each in array], 
                    'length' : len(array)}), 200

@app.route('/api/tags', methods=['GET'])
def get_tags():
    tags = Tag.query.all()
    return jsonify({'array' : [tag.to_dict() for tag in tags], 'length' : len(tags)}), 200
@app.route('/api/games', methods=['GET'])
def get_games():
    # Xử lý phân trang (Pagination)
    page = int(request.args.get('page')) if request.args.get('page') else 0
    limit = int(request.args.get('limit')) if request.args.get('limit') else 10
    first_id = page * limit
    last_id = first_id + limit
    array = db.session.query(Game, GameTagged, Tag)\
                        .select_from(Game).join(GameTagged).filter(Game.gid==GameTagged.gid)\
                        .join(Tag).filter(GameTagged.tid==Tag.tid).all()
    mapping = {}
    list_game = []
    for row in array:
        name = row.Game.name
        tag = row.Tag.name
        if name not in mapping.keys():
            mapping[name] = []
        else:
            mapping[name].append(tag)
    for key, value in mapping.items():
        list_game.append({'name' : key, 'tags' : value})
    list_game = list_game[first_id:last_id]
    return jsonify({'array' : list_game, 
                    'length' : len(list_game),
                    '_pagination' : {
                        '_limit' : len(list_game),
                        '_page' : page
                    }}), 200

@app.route('/api/accounts', methods=['GET'])
def get_accounts():
    array = [account.to_dict() for account in Account.query.all()]
    return jsonify({'array' : array,
                    'length' : len(array)}), 200

@app.route('/api/user_info', methods=['GET'])
def get_user_info():
    array = [user.to_dict() for user in UserInfo.query.all()]
    return jsonify({'array' : array,
                    'length' : len(array)}), 200

#-----------------------------------------------------------------------------------------------------------------
# Update methods
#-----------------------------------------------------------------------------------------------------------------

@app.route('/api/account', methods=['PUT'])
@token_required
def update_account(current):
    '''
        input: {'old_password' : ,
                'password' : }
    '''
    data = request.json
    if check_password_hash(current.password, data['old_password']):
        current.password = generate_password_hash(data['password'], method='sha256')
        return jsonify({'message' : 'Change password successfully!'}), 200
    else:
        return jsonify({'message' : 'Password is wrong!'}), 400

#-----------------------------------------------------------------------------------------------------------------
# Database methods
#-----------------------------------------------------------------------------------------------------------------

@app.route('/api/database/create', methods=['GET'])
def create_table():
    try:
        db.create_all()
        return jsonify({"message" : "Create all table successfully!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message" : "Failed"}), 200


@app.route('/api/database/drop', methods=['GET'])
def drop_table():
    try:
        db.drop_all()
        return jsonify({"message" : "Drop all table successfully!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message" : "Failed"}), 200

