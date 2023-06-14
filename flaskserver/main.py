"""Main entry point for the backend."""
from flaskserver import create_app

app = create_app()


def main():
    """Start the backend."""
    app.run()


if __name__ == '__main__':
    main()
