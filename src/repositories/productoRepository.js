const pool = require("../config/db");

const crearProducto = async (producto) => {

  const query = `
    INSERT INTO productos(nombre, precio_clp, descripcion, stock)
    VALUES($1,$2,$3,$4)
    RETURNING *
  `;

  const valores = [
    producto.nombre,
    producto.precio_clp,
    producto.descripcion,
    producto.stock
  ];

  const resultado = await pool.query(query, valores);

  return resultado.rows[0];
};

const obtenerProductos = async () => {

  const resultado = await pool.query("SELECT * FROM productos");

  return resultado.rows;
};

const obtenerProductoPorId = async (id) => {

  const query = "SELECT * FROM productos WHERE id = $1";

  const resultado = await pool.query(query, [id]);

  return resultado.rows[0];
};

const eliminarProducto = async (id) => {

  const query = "DELETE FROM productos WHERE id = $1 RETURNING *";

  const resultado = await pool.query(query, [id]);

  return resultado.rows[0];
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  eliminarProducto
};