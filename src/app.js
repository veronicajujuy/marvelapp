const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/usersRoutes");

app.set("view engine", "ejs");
app.set("views", "./src/views");
// para decirle a express donde se encuentran nuestros archivos estaticos imagenes, css
app.use(express.static("public"));
// para poder enviar información por post:
app.use(express.urlencoded({ extended: false }));

app.use(mainRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(3002, () => console.log("servidor escuchando en puerto 3002!"));
