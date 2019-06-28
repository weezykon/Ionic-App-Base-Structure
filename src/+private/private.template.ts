import { FeedbackService } from "./../app/services/feedback.service";
import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  LoadingController,
  ModalController,
  MenuController,
  Events,
  Tabs,
  NavParams
} from "ionic-angular";
import { UserService } from "../app/services/user.service";
import { AlertController } from "ionic-angular";
import { HomePage } from "./pages/home/home";
import { LoginPage } from './../+verify/pages/login/login';
@Component({
  selector: "private-template",
  templateUrl: "private-template.html"
})
export class PrivateTemplate {

  @ViewChild(Tabs) tabs: Tabs;

  rootPage = LoginPage;
  // HomePage = HomePage;

  // sideMenu: object = {
  //   Products: [
  //     {
  //       title: "Search Your Products",
  //       page: HomePage,
  //       icon: "assets/imgs/icons/search.svg"
  //     }
  //   ]
  // };
  tabParams = {
    searchTerm : "",
    filter: false
  };
  loggedin: boolean;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public FeedbackService: FeedbackService,
    public UserService: UserService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public events: Events
  ) {

    events.subscribe('change-tab', (tab, data) => {
      if(data.searchTerm) this.tabParams.searchTerm = data.searchTerm;
      if(data.filter) this.tabParams.filter = data.filter;
      this.tabs.select(tab);
    });
  }

  openPage(p: any) {
    this.navCtrl.push(p.page, p.data || {});
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: "ios",
      content: `
        Setting Up Store...
      `,
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log("Dismissed loading");
    });

    loading.present();
  }


  closeMenu() {
    this.menuCtrl.close();
  }
}
