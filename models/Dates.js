const database = require("../database/connection");

class Dates {
  async findDates() {
    var result = await database
      .select("date")
      .table("casesCovid")
      .groupBy("date");

    return result;
  }
}

module.exports = new Dates();
