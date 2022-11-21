# Import flask and datetime module for showing date and time
from flask import Flask
import json
from flask_cors import CORS
from flask import request
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app, origins="http://localhost:3000")


# Route for seeing a data
@app.route('/data')
def get_time():
    print('hello')
    # Returning an api for showing in reactjs
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }

@app.route('/')
def hello_world():
    return {"msg": "Hello, World!"}


@app.route('/user/<user_id>', methods=['GET','POST'])
def user(user_id):
    if request.method == 'GET':
        return {"user": user_id}
    if request.method == 'POST':
        f = open("users.json", "r")
        users = f.read()
        print(users)
        f.close()
        f = open("users.json", "w")
        data = json.loads(request.data)
        usersArray = []
        if users:
            prevUsers = json.loads(users)
            for user in prevUsers:
                usersArray.append(user)
        usersArray.append(data)
        f.write(json.dumps(usersArray))
        f.close()
        return data

# Running app
if __name__ == '__main__':
    app.run(debug=True)
