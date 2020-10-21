import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.testeStorage();
  }

  testeStorage() {
     // set a key/value
    this.storage.set('name', 'Max');

    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });

    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }
}
