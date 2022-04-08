var Dates = require("../models/Dates");

class DatesController {
  async index(req, res) {
    var dates = await Dates.findDates();

    res.status(200).json({ message: dates });
  }
}

module.exports = new DatesController();
