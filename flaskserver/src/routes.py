"""Handle the API endpoints for the API requests. Only returns data, no html."""
from flask import Blueprint, request
from flask_cors import CORS

import data

api = Blueprint('api', __name__, url_prefix='/v1')
CORS(api)


@api.route('/helloworld', methods=('GET',))
def index():
    """Get Hello World

    :return: Hello World.
    """
    return [{"Hello World": "Hello World"}]


@api.route("/createobject", methods=("POST",))
def create_object():
    data.data.append(request.json)
    print(data.data)
    return {'message': 'OK'}


@api.route("/search/<object_name>", methods=("GET",))
def get_by_name(object_name):
    result = []
    for single_object in data.data:
        if single_object["name"] == object_name:
            result.append(single_object)
    print(result)
    return {'message': 'OK', "data": result}
