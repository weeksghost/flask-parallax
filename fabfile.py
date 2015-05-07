from fabric.api import env, local
from fabric.context_managers import hide, settings


def sass():
    with settings(hide('warnings'), warn_only=True):
        local('cd static && sass --update --force scss:../static/assets/css \
              --style compressed --sourcemap=none && cd ..')


def sasswatch():
    with settings(hide('warnings'), warn_only=True):
        local('cd static && sass --watch scss:../static/assets/css \
              --style compressed --sourcemap=none && cd ..')

