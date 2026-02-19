const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/free-memory", (req, res) => {
  res.json({ freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + " GB" });
});

app.get("/total-memory", (req, res) => {
  res.json({ totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB" });
});

app.get("/cpu-arch", (req, res) => {
  res.json({ cpuArchitecture: os.arch() });
});

app.get("/user-info", (req, res) => {
  res.json({ username: os.userInfo().username });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
