import { Component, OnInit } from "@angular/core";
import { BookService } from "../service/book.service";
import { IBook } from "../shared/ibook";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  books: IBook[] = [];
  errorMessage: string;
  query: string;

  constructor(private _bookservice: BookService) {}

  ngOnInit() {}

  search() {
    this._bookservice.search(this.query).subscribe(
      (result: IBook[]) => {
        this.books = result;
        console.log(result);
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
