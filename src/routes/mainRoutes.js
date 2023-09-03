const express = require("express");
const mainController = require("../controllers/mainControllers");

const mainRouter = express.Router();

mainRouter.get("/", mainController.showHome);
mainRouter.get("/contacto", mainController.showContact);

module.exports = mainRouter;
