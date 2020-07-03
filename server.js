require("dotenv").config();
const app = require("express")();
const serverStatic = require("serve-static");
const path = require("path");

app.use("/", serverStatic(path.join(__dirname, "/dist")));
app.get(/.*/, (req, res) => {
  res.sendfile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT;
app.listen(port, () => console.log(`app is listening on port ${port}`));
