import { OnInit, OnDestroy } from '@angular/core';
import { AppareilFormPage } from './appareil-form/appareil-form';
import { Appareil } from './../../models/appareils.model';
import { Component } from '@angular/core';
import { ModalController, MenuController, NavController, ToastController, LoadingController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { AppareilsService } from '../../services/appareils.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})

export class AppareilsPage implements OnInit, OnDestroy {

    appareilsList: Appareil[];
    appareilSubscription: Subscription;

    constructor(private modalCtrl: ModalController, 
        private appareilService: AppareilsService, private toastCtrl: ToastController,
        private menuCtrl: MenuController, private loadingCtrl: LoadingController,
        private navCtrl: NavController) { }

    ngOnInit() {
        this.appareilSubscription = this.appareilService.appareils$.subscribe(
            (appareils: Appareil[]) => {
                this.appareilsList = appareils.slice();
            }
        );
    }

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

    onSaveList() {
        let loader = this.loadingCtrl.create({
            content: 'Sauvegarde en cours...'
        });
        loader.present();
        this.appareilService.saveData().then(
            () => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: 'Données sauvegardées ! ',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }, 
            (error) => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
    }

    onFetchList() {
        let loader = this.loadingCtrl.create({
            content: 'Récupération des données en cours...'
        });
        loader.present();
        this.appareilService.retrieveData().then(
            () => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: 'Données récupérées ! ',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            },
            (error) => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
    }

    ngOnDestroy() {
        this.appareilSubscription.unsubscribe();
    }
}
