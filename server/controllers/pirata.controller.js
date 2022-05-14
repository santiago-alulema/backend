const pirata = require("../models/pirata.model");

module.exports.findAllpirata = (req, res) => {
  pirata.find()
    .then(allDapirata => res.json({ pirata: allDapirata }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglepirata = (req, res) => {
	pirata.findOne({ _id: req.params.id })
		.then(oneSinglepirata => res.json({ pirata: oneSinglepirata }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewpirata = (req, res) => {
  pirata.create(req.body)
    .then(newlyCreatedpirata => res.json({ pirata: newlyCreatedpirata }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingpirata = (req, res) => {
  pirata.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedpirata => res.json({ pirata: updatedpirata }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingpirata = (req, res) => {
  pirata.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
