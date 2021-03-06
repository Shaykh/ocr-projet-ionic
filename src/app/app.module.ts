import { AuthPage } from './../pages/auth/auth';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppareilsService } from './../services/appareils.service';
import { AuthService } from './../services/auth.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppareilsPage } from '../pages/appareils/appareils';
import { SingleAppareilPage } from '../pages/appareils/single-appareil/single-appareil';
import { AppareilFormPage } from '../pages/appareils/appareil-form/appareil-form';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
  ],
  providers: [
    AppareilsService,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
