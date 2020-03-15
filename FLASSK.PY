from flask import Flask, jsonify, request
app = Flask(__name__)


@app.route('/getjson/<path:url>', methods=['GET'])
def getjson(url):
    import requests
    json_data = requests.get(url).json()
    return json_data


if __name__ == '__main__':

    app.run(debug=True)
