import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  recordarme: boolean = false;

  constructor(private navCtrl: NavController) {}

  login() {
    // Verificar si el usuario y contraseña no están vacíos
    if (this.username && this.password) {
      // Lógica de autenticación (aquí sería la conexión con tu backend o un mock de usuario)
      this.navCtrl.navigateForward('/menu');
    } else {
      alert("Por favor, ingresa tu nombre de usuario y contraseña.");
    }
  }

  goToRegister() {
    // Navegar a la página de registro
    this.navCtrl.navigateForward('/registrar');
  }
}
