const fs = require("fs");
const path = require("path");
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
);

const productController = {
  showProducts: (req, res) => {
    res.render("allproducts", { products, titulo: "Productos" });
  },
  showDetail: (req, res) => {
    const id = req.params.id;
    const product = products.find((item) => item.id == id);
    res.render("productDetail", { product });
  },
  showEditProduct: (req, res) => {},
  editProduct: (req, res) => {},
};

module.exports = productController;
