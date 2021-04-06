// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/api", require("./routes/api"));

// const CONNECTION_URL = "mongodb://localhost/Hikr";
// const CONNECTION_URL =
//   "mongodb+srv://curtishp04:cpsp1994!@cluster0.cg3z6.mongodb.net/Hikr?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Hikr",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))