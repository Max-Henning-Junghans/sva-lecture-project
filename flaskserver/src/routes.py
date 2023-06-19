"""Handle the API endpoints for the API requests. Only returns data, no html."""
from flask import (Blueprint)
from flask_cors import CORS

api = Blueprint('api', __name__, url_prefix='/v1')
CORS(api)


@api.route('/helloworld', methods=('GET',))
def index():
    """Get Hello World

    :return: Hello World.
    """
    return [{"Hello World": "Hello World"}]
