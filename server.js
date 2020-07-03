require("dotenv").config();
const app = require("express")();
const favicon = require("serve-favicon");

const serverStatic = require("serve-static");
const path = require("path");
app.use("/", serverStatic(path.join(__dirname, "/dist")));
app.use(favicon(path.join(__dirname, "./dist/favicon.ico")));

const port = process.env.PORT;
app.listen(port, () => console.log(`app is listening on port ${port}`));
