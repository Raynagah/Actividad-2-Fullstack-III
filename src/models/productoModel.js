class Producto {
  constructor(id, nombre, precio_clp, descripcion, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio_clp = precio_clp;
    this.descripcion = descripcion;
    this.stock = stock;
  }
}

module.exports = Producto;