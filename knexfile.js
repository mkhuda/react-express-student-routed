// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'us-cdbr-iron-east-05.cleardb.net',
      database: 'heroku_00575bb32b9053c',
      user:     'bd71451ac8b6f0',
      password: '	a5221c32'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: 'us-cdbr-iron-east-05.cleardb.net',
      database: 'heroku_00575bb32b9053c',
      user:     'bd71451ac8b6f0',
      password: '	a5221c32'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }

};
