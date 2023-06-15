# Source for the Dockerfile: https://medium.com/geekculture/how-to-dockerize-your-flask-application-2d0487ecefb8
FROM python:3.9-slim-buster
WORKDIR /app
COPY Requirements.txt /app
RUN pip install -r Requirements.txt
COPY src/. .
EXPOSE 5000
ENV FLASK_APP=main.py
ENV FLASK_DEBUG=false
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]