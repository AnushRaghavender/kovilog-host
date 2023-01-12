const express = require("express");
const connectDB = require("./config/db");
// const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

// dotenv.config();

var app = express();
app.use(express.json({ extended: false }));

app.use(
  cors({ origin: ["http://localhost:3000", "https://kovilog.onrender.com"] })
);

connectDB();

//Routes definition
app.use("/api/users", require("./routes/api/users"));
app.use("/api/authentication", require("./routes/api/authentication"));
app.use("/api/temple", require("./routes/api/temple"));

app.get("/", (req, res) => {
  res.status(200).send("API is running....");
});

// if (process.env.NODE_ENV === "production") {
//   //app.use(express.static(path.join(path.resolve(), '/client/build')))
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(path.resolve(__dirname, "client", "build", "index.html"))
//     )
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.status(200).send("API is running....");
//   });
// }

//Port configuration
// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log("Server started on port " + PORT + "."));
