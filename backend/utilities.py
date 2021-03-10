import datetime
import jwt

def encode_auth_token(uid, key):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=10),
            'iat': datetime.datetime.utcnow(),
            'uid': uid
        }
        return jwt.encode(
            payload,
            key,
            algorithm='HS256'
        )
    except Exception as e:
        print(e)
        return e