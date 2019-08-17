import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  email: string;
  pwd: string;
  confirmPwd: string;
  name: string;

  constructor(private auth: AuthService, private myRoute: Router) {}

  ngOnInit() {}

  register() {
    if (this.pwd == this.confirmPwd) {
      this.auth.signup(this.email, this.pwd, this.name);
      console.log(this.email);
      console.log(this.pwd);
      this.myRoute.navigate(["Home"]);
    }
  }
}
