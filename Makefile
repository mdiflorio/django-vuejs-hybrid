#!make

env-init:
	docker-compose up -d
	docker-compose exec web python3 manage.py migrate
	docker-compose exec web python3 manage.py loaddata test_data.json
env-remove:
	docker-compose down -v --remove-orphans
env-remove-all:
	docker-compose down -v --rmi all --remove-orphans