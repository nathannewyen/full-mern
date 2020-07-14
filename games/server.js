const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const games = [
  {
    title: "LoL",
    genre: "MOBA",
  },
  {
    title: "CSGO",
    genre: "Gun",
  },
];

app.get("/games", (req, res) => {
  res.json(games);
});

app.post("/games", (req, res) => {
  games.push(req.body);
  res.json({ status: "ok" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
