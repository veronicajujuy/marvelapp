const express = require("express");
const productController = require("../controllers/productControllers");
const productRouter = express.Router();

// mostrar productos
productRouter.get("/", productController.showProducts);

// mostrar detalle productos
productRouter.get("/detail/:id", productController.showDetail);
// editar productos
productRouter.get("/edit/:id", productController.showEditProduct);
productRouter.post("/edit/:id", productController.editProduct);
// borrar productos

module.exports = productRouter;
