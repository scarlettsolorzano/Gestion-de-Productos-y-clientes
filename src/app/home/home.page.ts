import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorNombre = "";
  valorDescripcion = "";
  valorCantidad: number | null = null;
  valorPrecioCosto: number | null = null;
  valorPrecioVenta: number | null = null;
  urlProducto = "";

  productos: {
    id: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    precioCosto: number;
    precioVenta: number;
    url: string;
  }[] = [];

  // Variables de control para edición
  posicion = 0;
  actualizarBoton = false;

  constructor() {
    // Obtener productos del localStorage
    let productosLocal = localStorage.getItem("productos");
    if (productosLocal) {
      this.productos = JSON.parse(productosLocal);
    }
  }

  // Botón eliminar
  Borrar(i: number) {
    if (confirm("¿Deseas eliminar este producto?")) {
      this.productos.splice(i, 1);
      localStorage.setItem("productos", JSON.stringify(this.productos));
    }
  }

  // Botón agregar
  Agregar() {
    if (this.valorNombre && this.valorDescripcion && this.valorCantidad && this.valorPrecioCosto && this.valorPrecioVenta && this.urlProducto) {
      this.productos.push({
        id: Date.now(),
        nombre: this.valorNombre,
        descripcion: this.valorDescripcion,
        cantidad: this.valorCantidad,
        precioCosto: this.valorPrecioCosto,
        precioVenta: this.valorPrecioVenta,
        url: this.urlProducto
      });
      // Guardar en localStorage
      localStorage.setItem("productos", JSON.stringify(this.productos));
      
      // Limpiar valores
      this.LimpiarFormulario();
    }
  }

  // Botón actualizar
  Actualizar() {
    this.productos[this.posicion] = {
      id: this.productos[this.posicion].id,
      nombre: this.valorNombre,
      descripcion: this.valorDescripcion,
      cantidad: this.valorCantidad!,
      precioCosto: this.valorPrecioCosto!,
      precioVenta: this.valorPrecioVenta!,
      url: this.urlProducto
    };
    // Guardar en localStorage
    localStorage.setItem("productos", JSON.stringify(this.productos));
    
    // Limpiar formulario y estado
    this.LimpiarFormulario();
  }

  // Botón cancelar
  Cancelar() {
    this.LimpiarFormulario();
  }

  // Método para editar un producto existente
  Editar(i: number) {
    this.actualizarBoton = true;
    this.posicion = i;
    let producto = this.productos[i];
    this.valorNombre = producto.nombre;
    this.valorDescripcion = producto.descripcion;
    this.valorCantidad = producto.cantidad;
    this.valorPrecioCosto = producto.precioCosto;
    this.valorPrecioVenta = producto.precioVenta;
    this.urlProducto = producto.url;
  }

  // Método para limpiar el formulario y estado de edición
  private LimpiarFormulario() {
    this.actualizarBoton = false;
    this.valorNombre = "";
    this.valorDescripcion = "";
    this.valorCantidad = null;
    this.valorPrecioCosto = null;
    this.valorPrecioVenta = null;
    this.urlProducto = "";
  }
}
