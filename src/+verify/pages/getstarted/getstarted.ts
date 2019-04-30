import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../../app/services/auth.service";
import { PrivateTemplate } from "../../../+private/private.template";

/**
 * Generated class for the GetstartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-getstarted",
  templateUrl: "getstarted.html"
})
export class GetstartedPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad GetstartedPage");
  }

  loginpagess() {
    this.authService
      ._setStarted()
      .then(res => {
        this.navCtrl.setRoot(PrivateTemplate);
      })
      .catch(err => {
        this.navCtrl.setRoot(PrivateTemplate);
      });
  }
}
