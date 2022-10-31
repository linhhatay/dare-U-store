const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const handlebars = require("express-handlebars");
const app = express();
const port = 5000;

const route = require("./routes");
const db = require("./config/db");

dotenv.config();
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`App listening at http:localhost:${port}`);
});
