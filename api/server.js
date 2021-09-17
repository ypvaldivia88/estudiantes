const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to students application." });
});

const studentController = require("./app/controllers/student.controller");
// students routes
app
  .route("/students")
  .get(studentController.list)
  .post(studentController.create);
app
  .route("/students/:id")
  .get(studentController.show)
  .put(studentController.update)
  .delete(studentController.remove);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
