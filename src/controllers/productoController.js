const productoService = require("../services/productoService");

const crearProducto = async (req, res) => {
  try {

    const producto = await productoService.crearProducto(req.body);

    res.status(201).json(producto);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};

const obtenerProductos = async (req, res) => {

  try {

    const productos = await productoService.obtenerProductos();

    res.json(productos);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

const obtenerProductoPorId = async (req, res) => {

  try {

    const producto = await productoService.obtenerProductoPorId(req.params.id);

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json(producto);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

const eliminarProducto = async (req, res) => {

  try {

    const producto = await productoService.eliminarProducto(req.params.id);

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json({ mensaje: "Producto eliminado", producto });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  eliminarProducto
};