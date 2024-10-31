import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage {
  valorUsuario="";
  valorDireccion="";
  valorPhone:number | null = null;;
  valorCorreo="";
  urlCliente=""

clientes:{
  id:number;
  nombre: string;
  direccion: string;
  telefono:number;
  correo:string;
  url:string;
}[]=[]

//variables de edición
posicion = 0;
actualizarBoton = false;

constructor() {
  // Obtener productos del localStorage
  let clientesLocal = localStorage.getItem("clientes");
  if (clientesLocal) {
    this.clientes = JSON.parse(clientesLocal);
  }
}

// Botón eliminar
Borrar(i: number) {
  if (confirm("¿Deseas eliminar este cliente?")) {
    this.clientes.splice(i, 1);
    localStorage.setItem("clientes", JSON.stringify(this.clientes));
  }
}

// Botón agregar
Agregar() {
  if (this.valorUsuario && this. valorDireccion && this.valorPhone && this.valorCorreo && this.urlCliente && this.urlCliente) {
    this.clientes.push({
      id:Date.now(),
      nombre: this.valorUsuario,
      direccion: this.valorDireccion,
      telefono: this.valorPhone,
      correo: this.valorCorreo,
      url: this.urlCliente
    });
    // Guardar en localStorage
    localStorage.setItem("clientes", JSON.stringify(this.clientes));
    
    //limpiar valores
    this.LimpiarFormulario();


    /* Limpiar valores
    this.valorUsuario = "";
    this.valorDireccion = "";
    this.valorPhone = null;
    this.valorCorreo = "";
    this.urlCliente = "";
    */
  }
}

 // Botón actualizar
 Actualizar() {
  this.clientes[this.posicion] = {
    id: this.clientes[this.posicion].id,
    nombre: this.valorUsuario,
    direccion: this.valorDireccion,
    telefono: this.valorPhone!,
    correo: this.valorCorreo,
    url: this.urlCliente
  };
  // Guardar en localStorage
  localStorage.setItem("clientes", JSON.stringify(this.clientes));
  
  // Limpiar formulario y estado
  this.LimpiarFormulario();
}

 // Botón cancelar
 Cancelar() {
  this.LimpiarFormulario();
}


//btnEditar
Editar(i: number){
  this.actualizarBoton = true;
  this.posicion = i;
  let cliente = this.clientes[i];
  this.valorUsuario=cliente.nombre;
  this.valorPhone=cliente.telefono;
  this.valorDireccion=cliente.direccion;
  this.valorCorreo=cliente.correo;
  this.urlCliente=cliente.url;
  this.clientes.splice(i,1);

}

// Método para limpiar el formulario y estado de edición
private LimpiarFormulario() {
  this.actualizarBoton = false;
  this.valorUsuario = "";
  this.valorDireccion = "";
  this.valorPhone = null;
  this.valorCorreo = "";
  this.urlCliente = "";
}
}