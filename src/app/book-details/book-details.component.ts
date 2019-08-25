import { Component, OnInit } from "@angular/core";
import { IBook } from "../shared/ibook";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../service/book.service";
import { IReview } from "../shared/ireview";
import { ReviewService } from "../service/review.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  id: string;
  book: IBook;
  reviews: IReview[] = [];
  bookReviews: IReview[] = [];
  errorMessage: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this._bookService.getBook(this.id).subscribe(
      (result: IBook) => {
        this.book = result;
        console.log(result);
      },
      error => (this.errorMessage = <any>error)
    );

    this._reviewService.getReviews().subscribe((result: IReview[]) => {
      this.reviews = result;
      this.bookReviews = this.reviews.filter(r => r.bookId === this.id);
    });
  }
}
