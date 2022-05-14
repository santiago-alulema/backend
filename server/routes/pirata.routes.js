const UserController = require("../controllers/pirata.controller");
const UserControllerPosition = require("../controllers/position.controller");

module.exports = app => {
  app.get("/api/pirata/", UserController.findAllpirata);
  app.get("/api/pirata/:id", UserController.findOneSinglepirata);
  app.put("/api/pirata/update/:id", UserController.updateExistingpirata);
  app.post("/api/pirata/new", UserController.createNewpirata);
  app.delete("/api/pirata/delete/:id", UserController.deleteAnExistingpirata);
  app.get("/api/position/", UserControllerPosition.findAllposition);
  app.post("/api/position/new", UserControllerPosition.createNewposition);

};