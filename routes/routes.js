var express = require("express");
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var CaseController = require("../controllers/CaseController");
var DatesController = require("../controllers/DatesController");

router.get("/", HomeController.index);
router.get("/cases/:date/count", CaseController.count);
router.get("/cases/:date/cumulative", CaseController.cumulative);
router.get("/dates", DatesController.index);

module.exports = router;
