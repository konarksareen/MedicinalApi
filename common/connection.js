const mongoose = require("mongoose");

module.exports.mongodb = async () => {
    await mongoose.connect(
        process.env.MONGODB_URL,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
        },
        (error, result) => {
            error ? console.error("Mongo", error) : console.log("Mongo Connected");
        }
    );};