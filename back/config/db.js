const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connexion réussie à MongoDB");
    })
    .catch((error) => {
      console.error("Erreur de connexion à MongoDB:", error);
    });
};

module.exports = connectDB;
