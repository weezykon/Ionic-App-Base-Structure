import { PrivateTemplate } from "./../../../+private/private.template";
import { FeedbackService } from "./../../../app/services/feedback.service";
import { AuthService } from "./../../../app/services/auth.service";
import { UserService } from "./../../../app/services/user.service";
import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  Content,
  LoadingController,
  ViewController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SigninPage } from "./../signin/signin";
import { SignupService } from "./../../services/signup.service";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  fullname = "";
  email = "";
  phone = "";
  password = "";
  confirmpassword = "";
  agree = true;
  closeIcon: boolean;
  constructor(
    public viewCtrl: ViewController,
    public UserService: UserService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public SignupService: SignupService,
    public AuthService: AuthService,
    public FeedbackService: FeedbackService,
    public loadingCtrl: LoadingController
  ) {
    this.closeIcon = navParams.get("closeIcon");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }
  closeModal() {
    this.viewCtrl.dismiss(false);
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validate() {
    console.log(this.agree);
    if (this.fullname == "") {
      return this.FeedbackService.show("danger", "Please fill in your name");
    }

    if (this.phone == "") {
      return this.FeedbackService.show(
        "danger",
        "Please enter valid phone number"
      );
    }
    if (this.email == "" || this.validateEmail(this.email) == false) {
      return this.FeedbackService.show(
        "danger",
        "Please enter valid email address"
      );
    }

    if (
      this.password == "" ||
      this.confirmpassword == "" ||
      this.password != this.confirmpassword
    ) {
      return this.FeedbackService.show("danger", "Please check passwords");
    }
  }

  signup() {
    let loader = this.loadingCtrl.create();
    loader.present();

    this.validate();
    let details = {
      fullname: this.fullname,
      phone_number: Number(this.phone),
      email: this.email,
      password: this.password
    };
    this.SignupService.signup(details)
      .then(data => {
        loader.dismiss();
        console.log(data);
        !this.closeIcon ? this.navCtrl.setRoot(PrivateTemplate) : this.viewCtrl.dismiss(true);
      })
      .catch(err => {
        loader.dismiss();
        this.FeedbackService.show('danger', "Oops, an Error occured, Try again later");
      });
  }

  gotosignin() {
    this.navCtrl.setRoot(SigninPage);
  }
}
