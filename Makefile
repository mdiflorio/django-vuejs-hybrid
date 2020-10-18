#!make

env-init:
	docker-compose up -d
	docker-compose exec web python3 manage.py migrate
