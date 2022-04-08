var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "wb39lt71kvkgdmw0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "wq2wo79f8v3xlai7",
    password: "t2v8dvrzj8do7eps",
    database: "gyzwx5dqrsidtj9o",
  },
});

module.exports = knex;
