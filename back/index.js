const express = require("express");
const cors = require("cors");
const app = express();
const port = 7007;

app.use(express.json());
app.use(cors());

app.post("/greeting", (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.name) {
      throw new Error("please include a name in your body like name: 'Ali'");
    }
    res.status(200).send(`Hi Mr. ${req.body.name}`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`app is listen to port ${port}`);
});
