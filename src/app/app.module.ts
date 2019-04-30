import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { VerifyModule } from '../+verify/verify.module';
import { PrivateModule } from '../+private/private.module';

import { FeedbackService } from './services/feedback.service';
import { AuthService } from './services/auth.service';

import { UserService } from './services/user.service';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInterceptor} from './services/httpclient.interceptor'
import { HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: " ",
      loadingSpinner: "crescent",
      tabsHideOnSubPages: false
    }),
    IonicStorageModule.forRoot(),
    VerifyModule,
    PrivateModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
    SplashScreen,
    FeedbackService,
    UserService,
    AuthService
  ]
})
export class AppModule {}
