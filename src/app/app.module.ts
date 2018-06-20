import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeModule } from '../pages/home/home.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../utils/config';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthService } from '../services/auth';
import { NgxsModule } from '@ngxs/store';
import { LoginPageStore } from '../store/login.page';

@NgModule({
  declarations: [MyApp, ListPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    HomeModule,
    LoginPageModule,
    NgxsModule.forRoot([LoginPageStore])
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}
