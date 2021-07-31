const mongoose = require("mongoose")

const schema = mongoose.Schema({
	userName: String,
    accountNumber: String,
    emailAddress: String,
    identityNumber: String,
})

module.exports = mongoose.model("User", schema)