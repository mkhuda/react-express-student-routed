# React with Express as API

Project created with Express JS, React JS and Knex

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See `installing` section to test the project on a development machine.

### Prerequisites

- NPM
- ExpressJS
- create-react-app

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

- Rename *knexfile.sample* to *knexfile.js*, and edit as your database (mysql or postgresql) connection setting
- Run `npm install`
- Move to `/app` directory and run `npm install` on there, to install react packages (frontend).
- Install `knex` as global by `npm i knex -g`
- Run the knex to copy seed, and makes sample work as expected

```
$ knex migration:latest
$ knex seed:run
```

That seed is some data of students for a little demo.
- Run `npm start` on root directory to start the development server

## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [KnexJS](http://knexjs.org/) - Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use
* [Reactstrap](reactstrap.github.io) - Easy to use React Bootstrap 4 components

## Authors

* **Muhammad K Huda** - *JS work* - [Mkhuda](https://github.com/mkhuda)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the WTH License - see the [LICENSE.md](LICENSE.md) file for details