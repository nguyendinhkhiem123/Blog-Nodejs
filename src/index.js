const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const handlebars = require("express-handlebars");
const routes = require("./routes/index.js");
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
); // sử dụng middleware form

app.use(express.json()); // sử dungj midlleware từ cách thư viện call api

//http logger
app.use(morgan("combined"));

// template e

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

routes(app);

app.listen(port, () => console.log("Đã chạy"));
