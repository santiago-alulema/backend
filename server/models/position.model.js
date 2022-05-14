const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
	position: String,
});

const position = mongoose.model("position", PositionSchema);

module.exports = position;