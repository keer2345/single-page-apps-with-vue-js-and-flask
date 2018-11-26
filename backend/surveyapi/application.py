from flask import Flask


def create_app(app_name='SURVEY_APP'):
    app = Flask(__name__)
    app.config.from_object('surveyapi.config.BaseConfig')

    from surveyapi.api import api
    app.register_blueprint(api, url_prefix='/api')

    return app