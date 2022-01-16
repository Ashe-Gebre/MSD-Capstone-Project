const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require("./routes/user");
const studentPostRouter = require("./routes/studentPosts");

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const url = process.env.CONNECTION_URL;


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/user", userRouter);
app.use("/student-posts", studentPostRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err?.message });
});
app.listen(port, () => console.log(`Listening port ${port}...`));
