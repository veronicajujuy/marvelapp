const characters = require("../data/data");

const mainController = {
  showHome: (req, res) => {
    res.render("home", { characters, titulo: "Superheroes API" });
  },
  showContact: (req, res) => {
    res.render("contacto");
  },
};

module.exports = mainController;
