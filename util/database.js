const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://vladilin:Vlad1996@cluster0-fa4dz.mongodb.net/test?retryWrites=true"
  )
    .then(client => {
      console.log("Connected");
      callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
