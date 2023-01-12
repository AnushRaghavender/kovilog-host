const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const dotenv = require("dotenv");

//Make the database connection to atlas
const connectDB = async () => {
  try {
    // if (process.env.NODE_ENV === "production") {
    //   await mongoose.connect(process.env.MY_MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true,
    //   });
    //   console.log("MongoDB Connected.....");
    // } else {
    //   await mongoose.connect(db, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true,
    //   });
    //   console.log("MongoDB Connected.....");
    // }
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected.....");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
