import { LoadingController, MenuController, NavParams } from "ionic-angular";
import { FeedbackService } from "./../../../app/services/feedback.service";
import { UserService } from './../../../app/services/user.service';
import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { FormControl } from "@angular/forms";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  initialitems = [];
  categories = [];
  searchTerm: string = "";
  searching: any = false;
  searchControl: FormControl;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modctrl: ModalController,
    public FeedbackService: FeedbackService,
    public UserService: UserService,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController
  ) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SingleitemviewPage");
  }

  ionViewDidEnter() {
    console.log("ionViewDidLoad HomePage");
  }


  openMenu() {
    this.menuCtrl.open();
    console.log("open menu");
  }
}
