import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BookDetailsComponent } from "./book-details/book-details.component";

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  { path: "Details", component: BookDetailsComponent },
  { path: "", redirectTo: "Home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
