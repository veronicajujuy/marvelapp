const usersController = {
  showRegitro: (req, res) => {
    res.render("registro");
  },
  showLogin: (req, res) => {
    res.render("login");
  },
  processRegistro: (req, res) => {
    res.send("ok todo bien");
  },
};

module.exports = usersController;
