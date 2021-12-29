FROM python:3.8

RUN pip install pipenv

COPY Pipfile* /tmp

RUN cd /tmp && pipenv lock --keep-outdated --requirements > requirements.txt

RUN pip install -r /tmp/requirements.txt

COPY . /tmp/app

WORKDIR /tmp/app

CMD ["gunicorn", "--bind", "0.0.0.0:5001", "app:app"]