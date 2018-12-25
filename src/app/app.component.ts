import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from './../pages/options/options';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;
  isAuth: boolean = false;

  @ViewChild('content') content: NavController

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let config = {
        apiKey: "AIzaSyDc64uigI4FJIlg1c4N-yCTvVk_YmdvaoE",
        authDomain: "ocr-ionic-appareils.firebaseapp.com",
        databaseURL: "https://ocr-ionic-appareils.firebaseio.com",
        projectId: "ocr-ionic-appareils",
        storageBucket: "ocr-ionic-appareils.appspot.com",
        messagingSenderId: "1094584513810"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, { mode: 'connect' });
          }
        }
      );
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

