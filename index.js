var express = require("express");
var app = express();
var router = require("./routes/routes");
const datainsert = require("./database/dataInsert");

app.use("/", router);

app.listen(3333, () => {
  console.log("Servidor rodando");
});
