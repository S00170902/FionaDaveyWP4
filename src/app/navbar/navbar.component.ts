import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  title: string = "Library";

  isLoggedIn: boolean;

  navbarOpen = false;

  userName: string;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(
    private auth: AuthService,
    private route: Router,
    private _firebaseAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  userLoggedIn(): boolean {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.userName = this._firebaseAuth.auth.currentUser.displayName;
    return this.isLoggedIn;
  }

  onLogOut() {
    this.auth.doLogout();
    this.isLoggedIn = this.auth.isLoggedIn();
    this.route.navigate(["Login"]);
  }
}
