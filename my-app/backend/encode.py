import bcrypt as bc

def encode(password):
    password_bytes = password.encode('utf-8')
    salt = bc.gensalt()
    password_hashed =  bc.hashpw(password_bytes,salt)
    return password_hashed.decode()
    #print("original: ",password)
    #print("hashed password: ",password_hashed)

