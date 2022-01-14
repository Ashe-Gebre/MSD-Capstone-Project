const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const studentPostRouter = require('./routes/studentPosts')

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/university-student-experience", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/student-posts", studentPostRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err?.message });
});
app.listen(3000, () => console.log("Listening port 3000..."));
