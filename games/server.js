const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const games = [{
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

app.get("/games/:id", (req, res) => {
  res.json(games[req.params.id])
})

app.post("/games", (req, res) => {
  games.push(req.body);
  res.json({
    status: "ok"
  });
});

app.put("/games/:id", (req, res) => {
  games[req.params.id] = req.body
  res.json({
    status: "ok"
  });
})

app.delete("/games/:id", (req, res) => {
  games.splice([req.params.id], 1)
  res.json({
    status: "ok"
  });
})




app.listen(port, () => console.log(`Listening on port: ${port}`));