const express = require("express");
const usersController = require("../controllers/usersControllers");
const userRouter = express.Router();

// mostrar productos

userRouter.get("/registro", usersController.showRegitro);
userRouter.post("/registro", usersController.processRegistro);

userRouter.get("/login", usersController.showLogin);

module.exports = userRouter;
