import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private navCtrl: NavController) { }

  productos() {
    this.navCtrl.navigateForward('/home'); // Redirige a la página Home
  }

  clientes() {
    this.navCtrl.navigateForward('/clientes'); // Redirige a la página Clientes
  }
}
