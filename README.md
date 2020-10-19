# Django - Vue.js hybrid
The objective of this repo is to have a Djanog and Vue.js hybrid example. 
Here I've show how to integrate Vue.js and Webpack into a Django application. 

I've also added a generic form which is generated based of a Django model. 
The aim was to have something as generic as possible that closely 
resembles the functionality of Django Forms while using Vue.js.

### Technologies
- Django
- Vue.js
- Webpack
- Docker
- Tailwind CSS

### Requirements
This project requires Docker and Docker compose to run.

You will also need to make sure that ports `8000` and `5433` are free on your computer.

### Quick start
To get started run the following command:
```
make env-init
```

The command will spin up a Django annd Postgres containers.

You can then head to 

`http://127.0.0.1:8000/music/albums/create` and 
`http://127.0.0.1:8000/music/albums/update/1`

Once you have succesfully created a new Album. 

### Developement
If you would like to develop on the project, install Yarn and run 
```
yarn install
yarn serve
```

That will spin up the development server and give you hot reloading.

To run webpack for production run:
```
yarn build
```
