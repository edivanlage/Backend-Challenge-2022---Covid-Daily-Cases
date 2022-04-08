var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "Quit7@7@",
    database: "covid_cases",
  },
});

module.exports = knex;
