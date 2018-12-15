import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private navController: NavController) {
  }

  navigateRoot() {
    this.navController.navigateRoot('tab2');
  }

  navigateForward() {
    this.navController.navigateForward('tab2');
  }

  ionViewDidEnter() {
    // this.navigateRoot();
  }
}
