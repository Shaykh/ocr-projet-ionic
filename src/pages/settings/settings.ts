import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public alertCtrl: AlertController, public navParams: NavParams) {
  }

  onToggleLights(){
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer?',
      subTitle: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });

    alert.present();
  }

}
