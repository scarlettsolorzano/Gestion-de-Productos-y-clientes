
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  username: string = '';
  password: string = '';
  NombreTienda: string = '';
  UrlImagenTienda: string = '';

  constructor(private navCtrl: NavController) {}
  
  registrarUsuario() {
    // Verificar que los campos requeridos estén completos
    if (this.username && this.password && this.NombreTienda) {
      // Lógica para guardar los datos del usuario (en un backend o almacenamiento local)
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      // Regresar a la página de login
      this.navCtrl.navigateBack('/login');
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
}
