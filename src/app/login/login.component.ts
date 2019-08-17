import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  form;

  constructor(
    private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService
  ) {
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  tryFacebookLogin() {
    this.auth.doFacebookLogin().then(res => {
      this.myRoute.navigate(["Home"]);
    });
  }

  tryGoogleLogin() {
    this.auth.doGoogleLogin().then(res => {
      this.myRoute.navigate(["Home"]);
    });
  }

  tryTwitterLogin() {
    this.auth.doTwitterLogin().then(res => {
      this.myRoute.navigate(["Home"]);
    });
  }

  login() {
    this.auth.doLogin(this.form.value).then(
      res => {
        this.myRoute.navigate(["Home"]);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
