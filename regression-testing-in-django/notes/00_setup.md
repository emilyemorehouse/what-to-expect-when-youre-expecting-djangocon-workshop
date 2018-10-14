# ⚙️ Setup

## 📋 Requirements

It is recommended to bring a laptop running Mac, Windows or Linux. Chromebooks and tablets may have
limited functionality and may not be suitable for the entire workshop. If you don't have a laptop,
don't worry! We'll pair you up to work with someone who does.

You should come prepared with:

- Terminal of choice, running your shell of choice
- Text editor of choice
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Python 3.X (3.6+ preferred)](https://realpython.com/installing-python/)
- Virtual environment management - choose your favorite (Both a `requirements.txt` and a `Pipfile`
  are included):
  - [Pipenv](https://pipenv.readthedocs.io/en/latest/#install-pipenv-today)
  - [virtualenv](https://virtualenv.pypa.io/en/stable/installation/) /
    [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html)
  - Python 3's built-in virtual environment manager
  - etc

## 🔥 Quick Start

The necessary code is already included in this repository, no need to initialize a new project. The
boilerplate included is [Django Edge](https://django-edge.readthedocs.io).

First, activate your environment using your virtual environment manager of choice and install the
development dependencies:

### Environment Options

#### Using Pipenv

```sh
pipenv shell  # Make sure to set your Python 3 path, if needed --python=/path/to/python3
pipenv install --dev
```

#### Using Virtualenvwrapper

```sh
mkvirtualenv REGRESSION_TESTING_WORKSHOP  # This automatically activates the env
pip install -r requirements.txt
```

#### Using Virtualenv

```sh
virtualenv REGRESSION_TESTING_WORKSHOP
source bin/activate
pip install -r requirements.txt
```

#### Using Python 3's Built-In Environment Manager

```sh
python3 -m venv regression_testing_boilerplate
. regression_testing_boilerplate/bin/activate
pip install -r requirements.txt
```

### Configuration

The example code comes with a working configuration out of the box, but we need to copy it to a
place where the application will look for it:

```sh
cp src/regression_testing_boilerplate/settings/local.sample.env src/regression_testing_boilerplate/settings/local.env
```

We'll use sqlite in out "out of the box" configuration -- we don't need to worry about a full
database now.

Migrate your database, set up a super user, and voila! You can run the application:

```sh
cd src
python manage.py migrate
python manage.py createsuperuser  # Follow the prompts to set your user details
python manage.py runserver
```

## ▶️ Next up

[1 - Intro To Testing](./01_intro_to_testing.md)
