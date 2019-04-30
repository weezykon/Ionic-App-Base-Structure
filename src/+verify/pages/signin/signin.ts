import { SigninService } from "./../../services/signin.service";
import { PrivateTemplate } from "./../../../+private/private.template";
import { ForgotpasswordPage } from "./../forgotpassword/forgotpassword";
import { SignupPage } from "./../signup/signup";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import {  NavController, NavParams, LoadingController, ViewController } from "ionic-angular";
import { FeedbackService } from "./../../../app/services/feedback.service";
import { UserService } from "./../../../app/services/user.service";
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage {
  email;
  password;
  closeIcon: boolean;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public FeedbackService: FeedbackService,
    public SigninService: SigninService,
    public UserService: UserService,
    public loadingCtrl: LoadingController
  ) {
    this.closeIcon = navParams.get("closeIcon");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SigninPage");
  }
  closeModal() {
    this.viewCtrl.dismiss(false);
  }
  gotosignup() {
    this.navCtrl.setRoot(SignupPage);
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validate() {
    if (this.email == "" || this.validateEmail(this.email) == false) {
      return this.FeedbackService.show(
        "danger",
        "Please enter valid email address"
      );
    }

    if (this.password == "") {
      return this.FeedbackService.show("danger", "Please enter password");
    }
  }

  signin() {
    this.validate();
    let details = {
      email: this.email,
      password: this.password
    };

    this.SigninService.signin(details)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        this.FeedbackService.show("danger", "Error Logging In");
      });
  }
  login() {
    let loader = this.loadingCtrl.create();
    loader.present();

    let details = {
      email: this.email,
      password: this.password
    };

    this.SigninService.signin(details)
      .then((data: any) => {
        if (data.response.status == "success") {
          this.UserService._setlocal("token", data.response.data.token);
          this.UserService._setlocal(
            "userdetails",
            data.response.data.user
          ).then(() => {
            loader.dismiss();
            !this.closeIcon ? this.navCtrl.setRoot(PrivateTemplate) : this.viewCtrl.dismiss(true);
          });
        }else{
          loader.dismiss();
        }
      })
      .catch(err => {
        this.FeedbackService.show("danger", "Invalid Login Details");
        loader.dismiss();
      });
  }
}
