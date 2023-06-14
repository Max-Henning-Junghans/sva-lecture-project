"""Main entry point for the backend."""

from flask import Flask
from .routes import api


def create_app():
    """Create the app.

    :return: Fully initialized app
    """
    # create and configure the app
    the_app = Flask(__name__)

    the_app.register_blueprint(api)

    return the_app


app = create_app()


if __name__ == '__main__':
    main()


def main():
    """Start the backend."""
    app.run()
