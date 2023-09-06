const { validationResult } = require("express-validator");
const usersController = {
  showRegitro: (req, res) => {
    res.render("registro");
  },
  showLogin: (req, res) => {
    res.render("login");
  },
  processRegistro: (req, res) => {
    const resultValidation = validationResult(req);
    console.log(resultValidation.mapped());
    if (resultValidation.errors.length > 0) {
      res.render("registro", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      res.redirect("/");
    }
  },
};

module.exports = usersController;
