const productoRepository = require("../repositories/productoRepository");

const crearProducto = async (datos) => {
  return await productoRepository.crearProducto(datos);
};

const obtenerProductos = async () => {
  return await productoRepository.obtenerProductos();
};

const obtenerProductoPorId = async (id) => {
  return await productoRepository.obtenerProductoPorId(id);
};

const eliminarProducto = async (id) => {
  return await productoRepository.eliminarProducto(id);
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  eliminarProducto
};