const mongoose = require("mongoose");

// const dbname = "Ask_me";

const url = "mongodb://localhost:27017/Ask_me";

// "mongodb://localhost:27017/Ask_me"

// "mongodb://manux:${password}@ac-scydvpem-shard-00-00.et62e3x.mongodb.net:27017,  ac-scydvpm-shard-00-01.et62e3x.mongodb.net:27017,ac-scydvpm-shard-00-02.et62e3x.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-9zfsc9-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error", err));
};
