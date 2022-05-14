const mongoose = require("mongoose");

const PirataSchema = new mongoose.Schema({
	name: String,
	imageUrl: String,
	treasureChests: Number ,
	pirateCatch: String,
	position:String,
	pegLeg:Boolean ,
	eyePath:Boolean ,
	hookHand:Boolean ,

});

const pirata = mongoose.model("Pirata", PirataSchema);

module.exports = pirata;