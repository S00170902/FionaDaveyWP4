import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { AuthGuard } from "./service/auth.guard";
import { AddReviewComponent } from "./add-review/add-review.component";

const routes: Routes = [
  { path: "Home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  {
    path: "Details/:id",
    component: BookDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "AddReview/:id",
    component: AddReviewComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "Login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
