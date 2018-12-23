import { AppareilFormPage } from './appareil-form/appareil-form';
import { Appareil } from './../../models/appareils.model';
import { Component } from '@angular/core';
import { ModalController, MenuController, NavController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { AppareilsService } from '../../services/appareils.service';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})

export class AppareilsPage {

    appareilsList: Appareil[];

    constructor(private modalCtrl: ModalController, 
        private appareilService: AppareilsService,
        private menuCtrl: MenuController,
        private navCtrl: NavController) { }

    ionViewWillEnter(){
     this.appareilsList = this.appareilService.appareilsList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(SingleAppareilPage, { index: index });
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onNewAppareil() {
        this.navCtrl.push(AppareilFormPage);
    }
}
