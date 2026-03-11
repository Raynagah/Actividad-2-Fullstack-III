const express = require("express");
const cors = require("cors");

const productoRoutes = require("./routes/productoRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/productos", productoRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;