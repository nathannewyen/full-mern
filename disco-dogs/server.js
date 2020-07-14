const express = require("express"),
  app = express(),
  cors = require("cors"),
  port = 8000,
  db = "disco-dogs",
  server = app.listen(port, () => console.log(`Listening to on port ${port}`));

app.use(cors());
app.use(express.json());

require("./server/config/database.config")(db);
require("./server/routes/dog.route")(app);