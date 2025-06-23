@echo off
start cmd /k "python manage.py runserver 8000"
timeout /t 5
start cmd /k "lt --port 8000 --subdomain ontrack-dude1050"
