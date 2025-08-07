from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import json

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Welcome to the Flask App!"

# Load data

try:
    price_df = pd.read_csv("../data/cleaned/cleaned_brentoil_data.csv", parse_dates=['Date'])
except FileNotFoundError:
    price_df = pd.DataFrame()

try:    
    with open('../data/results/change_point_result.json') as f:
        changepoint_results = json.load(f)
except FileNotFoundError:
    changepoint_results = {}

@app.route("/api")
def list_routes():
    return jsonify([
        {"endpoint": "/", "description": "Home"},
        {"endpoint": "/api/prices", "description": "Returns price data as JSON"},
        {"endpoint": "/api/changepoint", "description": "Returns changepoint analysis as JSON"}
    ])

@app.route('/api/prices')
def get_prices():
    return price_df.to_json(orient='records', date_format='iso')

@app.route('/api/changepoint')
def get_changepoint():
    return jsonify(changepoint_results)

if __name__ == '__main__':
    app.run(debug=True)