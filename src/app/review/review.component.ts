import { Component, OnInit, Input } from "@angular/core";
import { IReview } from "../shared/ireview";
import { Router } from "@angular/router";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  @Input() reviews: IReview[];
  @Input() id: string;
  errorMessage: string;

  constructor(private _router: Router) {}

  ngOnInit() {}

  addReview() {
    this._router.navigate(["AddReview" + "/" + this.id]);
  }
}
