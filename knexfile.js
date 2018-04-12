// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: 'mysql://xnou6erwx6nl77v1:kejp0l537njxszck@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ozbp2iek3q6isj23',
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
    connection: 'mysql://xnou6erwx6nl77v1:kejp0l537njxszck@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ozbp2iek3q6isj23',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }

};
