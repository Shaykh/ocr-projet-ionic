import { AppareilsService } from './../../../services/appareils.service';
import { Appareil } from './../../../models/appareils.model';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {

  appareil: Appareil;
  index: number;

  constructor(public navParams: NavParams, private viewCtrl: ViewController, private appareilsService: AppareilsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteHours() {
    this.appareil.endTime = '';
    this.appareil.startTime = '';
    this.dismissModal();
  }
}
