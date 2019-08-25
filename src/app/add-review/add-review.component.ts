import { Component, OnInit, Input } from "@angular/core";
import { IReview } from "../shared/ireview";
import { ReviewService } from "../service/review.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-add-review",
  templateUrl: "./add-review.component.html",
  styleUrls: ["./add-review.component.css"]
})
export class AddReviewComponent implements OnInit {
  bookID: string;
  userID: string;
  name: string;
  rating: number;
  reviewText: string;

  constructor(
    private _reviewService: ReviewService,
    private _router: Router,
    private _firebaseAuth: AngularFireAuth,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bookID = this._activatedRoute.snapshot.paramMap.get("id");

    console.log(this._firebaseAuth.auth.currentUser);
    this.userID = this._firebaseAuth.auth.currentUser.uid;
    this.name = this._firebaseAuth.auth.currentUser.displayName;
  }

  submit() {
    let review: IReview = {
      bookId: this.bookID,
      userId: this.userID,
      displayName: this.name,
      starRating: this.rating,
      review: this.reviewText
    };
    console.log(review);
    this._reviewService.addReview(review);
    this._router.navigate(["/Details" + "/" + this.bookID]);
  }
}
