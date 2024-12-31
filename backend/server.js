const express = require("express");
const mongoose = require("mongoose");
const StudentRoute = require("./Route/StudentRoute");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(StudentRoute);

mongoose
  .connect(
    "mongodb+srv://omojolaobaloluwa:obalolu1976@cluster0.q9yj9ht.mongodb.net/cru"
  )
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err.message);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
