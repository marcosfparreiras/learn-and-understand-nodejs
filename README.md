# About this project
This project was created with all the resources available at the course **Learn and Understand NodeJS** (by Anthony Alicea) on Udemy. You can access the course through [this link](https://www.udemy.com/understand-nodejs/).

# How to run it
In order to make possible a very easy environment setup, the project was built using Docker. Therefore, to run it, please install:
- Docker ([how to install it](https://docs.docker.com/engine/installation/));
- Docker Compose ([how to install it](https://docs.docker.com/compose/install/)).

Once you have Docker and Docker Compose installed, access the project through the container:
```
docker-compose build server && docker-compose run server
```

It will open a bash inside the container. Once you're there, to run any code, just run `node <file path>`. For example, in order to execute the first resolution, run:
```
# node C6_LetsRunSomeJavascript/Finished/app.js
```
