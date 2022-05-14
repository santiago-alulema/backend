const position = require("../models/position.model");

module.exports.findAllposition = (req, res) => {
    position.find()
    .then(allDaposition => res.json({ position: allDaposition }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewposition = (req, res) => {
    position.create(req.body)
      .then(newlyCreatedposition => res.json({ position: newlyCreatedposition }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };