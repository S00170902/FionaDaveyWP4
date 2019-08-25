import { Component, OnInit, Input } from "@angular/core";
import { IReview } from "../shared/ireview";
import { Router } from "@angular/router";
import { ReviewService } from "../service/review.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  @Input() reviews: IReview[];
  @Input() id: string;
  userId: string;
  errorMessage: string;

  constructor(
    private _router: Router,
    private _reviewService: ReviewService,
    private _firebaseAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.userId = this._firebaseAuth.auth.currentUser.uid;
    if (this.reviews == null) {
      this._reviewService.getReviews().subscribe(
        (result: IReview[]) => {
          this.reviews = result;
          this.reviews.filter(r => r.userId === this.userId);
        },
        error => (this.errorMessage = <any>error)
      );
    }
  }

  addReview() {
    this._router.navigate(["AddReview" + "/" + this.id]);
  }
}
