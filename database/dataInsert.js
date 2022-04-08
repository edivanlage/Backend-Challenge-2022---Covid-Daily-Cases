const csv = require("csvtojson");
const fs = require("fs").promises;
const database = require("./connection");
const INPUT_FILENAME = "covid-variants";

async function createTable() {
  database.schema.hasTable("casesCovid").then(function (exists) {
    if (!exists) {
      database.schema
        .createTable("casesCovid", function (table) {
          table.string("location").notNullable();
          table.date("date").notNullable();
          table.string("variant").notNullable();
          table.integer("num_sequences").notNullable();
          table.float("perc_sequences").notNullable();
          table.integer("num_sequences_total").notNullable();
        })

        .then(() => {
          existData();
        });
    }
  });
}

async function insertData() {
  const csvString = await fs.readFile(`./${INPUT_FILENAME}.csv`, "utf8");
  const records = await csv({}).fromString(csvString);

  records.forEach((record) => {
    database
      .insert({
        location: record.location,
        date: record.date,
        variant: record.variant,
        num_sequences: record.num_sequences,
        perc_sequences: record.perc_sequences,
        num_sequences_total: record.num_sequences_total,
      })
      .into("casesCovid")
      .then(() => {});
  });
}

async function existData() {
  var countData = await database
    .select("*")
    .table("casesCovid")
    .count("location as count");

  if (countData[0].count == 0) {
    insertData();
  }
}

module.export = (database, createTable());
