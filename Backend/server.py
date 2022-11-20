# Import flask and datetime module for showing date and time
from flask import Flask
from flask_cors import CORS
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


# Running app
if __name__ == '__main__':
    app.run(debug=True)
