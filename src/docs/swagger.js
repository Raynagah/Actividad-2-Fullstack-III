const swaggerJsdoc = require("swagger-jsdoc");

const opciones = {

  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Microservicio Productos",
      version: "1.0.0"
    }
  },

  apis: ["./src/routes/*.js"]

};

const swaggerSpec = swaggerJsdoc(opciones);

module.exports = swaggerSpec;