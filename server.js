require("dotenv").config();
const app = require("express")();
const favicon = require("express-favicon");

const serverStatic = require("serve-static");
const path = require("path");
app.use(favicon(path.join(__dirname, "./dist/favicon.ico")));
app.use("/", serverStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT;
app.listen(port, () => console.log(`app is listening on port ${port}`));
