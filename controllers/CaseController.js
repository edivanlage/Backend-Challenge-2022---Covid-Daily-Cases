var Cases = require("../models/Cases");

class CaseController {
  async count(req, res) {
    var date = req.params.date;
    var cases = await Cases.findByDate(date);
    res.status(200).json(cases);
  }

  async cumulative(req, res) {
    var date = req.params.date;
    var cumulative = await Cases.sumCasesByDate(date);
    res.status(200).json(cumulative);
  }
}

module.exports = new CaseController();
