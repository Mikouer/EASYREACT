from flask import Flask, request, jsonify
from flask_cors import CORS
from encode import encode
from supabase_Client import supabase

app = Flask(__name__)
CORS(app)

@app.route('/api/hash', methods=['POST'])
def hash_pw():
    try:
        data = request.get_json()
        user_name = data.get('user_name')
        password = data.get('password')

        if not password:
            return jsonify({'error': 'Missing password'}), 400

        hashed = encode(password)
        try:
            response = supabase.table("users").insert({"user_name": user_name, "hashed_password": hashed}).execute()
            return jsonify({'hashed': hashed, 'supabase_result': response.data})
        except Exception as e:
            print("❌ 插入 Supabase 出错：", e)
            return jsonify({'error': str(e)}), 500
    except Exception as e:
        # 打印到控制台并返回 JSON 错误
        print("❌ 服务器出错：", e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000,debug= True)
