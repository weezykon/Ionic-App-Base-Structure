import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { UserService } from "./services/user.service";
import { PrivateTemplate } from "../+private/private.template";
import { AuthService } from "./services/auth.service";
import { HomePage } from "../+private/pages/home/home";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public UserService: UserService,
    public authService: AuthService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = PrivateTemplate;
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
