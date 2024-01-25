const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0";
const routes = require("./config/routes");
const path = require("path")

const layout = require("express-ejs-layouts");

app.use(layout);
app.set("views", path.join(__dirname, "app/views"));
app.set("layout", "layouts/application")
app.set("view engine", 'ejs')

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
