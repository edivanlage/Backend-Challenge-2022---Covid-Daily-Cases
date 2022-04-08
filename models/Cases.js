const database = require("../database/connection");

class Cases {
  async findByDate(date) {
    var results = await database
      .select("location", "variant", "num_sequences as cases")
      .where({ date: date })
      .table("casesCovid");
    return results;
  }

  async sumCasesByDate(date) {
    var sum = await database
      .select("location")
      .sum({ cases: "num_sequences" })
      .whereRaw(`date <= '${date}' `)
      .table("casesCovid")
      .groupBy("location");
    return sum;
  }
}

module.exports = new Cases();
