# Welcome to Gitsearch

This project is a practical test for my skills in React, Storybook, React Test, Docker and Git.

The repository is in [Github](https://github.com/DaviLemos/api-github-interview).

## Getting Started

In this project you need start using the command `npm install` to install the dependencies. This command should be used in the root folder and into backend folder.

## Start the project

After install all dependencies you need to start the server in folder `/backend` with the command `npm start`. To start the front-end you need to use the command `npm start` in root folder.

## Run Docker

To run the project in Docker you need do 3 things:

- 1 `docker build -t react-app .` in root folder.
- 2 `docker build -t api-server .` in folder `/backend`.
- 3 `docker-compose up -d` in root folder.
