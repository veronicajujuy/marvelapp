const express = require("express");
const usersController = require("../controllers/usersControllers");
const userRouter = express.Router();
const path = require("path");
const { body } = require("express-validator");
// configuracion de multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/avatars"));
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const uploadFile = multer({ storage });
// validaciones con express validator
const validations = [
  body("nombreyapellido")
    .notEmpty()
    .withMessage("Debes ingresar un nombre y apellido"),
  body("fechanacimiento").notEmpty().withMessage("Debes elegir una fecha"),
  body("personajes").notEmpty().withMessage("Debes elegir un personaje"),
  body("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato válido")
    .bail(),
  body("confirmpassword")
    .notEmpty()
    .withMessage("Este campo no puede quedar en blanco"),
  body("foto").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];
// usuarios

userRouter.get(
  "/registro",

  usersController.showRegitro
);
userRouter.post(
  "/registro",
  uploadFile.single("foto"),
  validations,
  usersController.processRegistro
);

userRouter.get("/login", usersController.showLogin);

module.exports = userRouter;
