import { Component, OnInit, Input } from "@angular/core";
import { IBook } from "../shared/ibook";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  @Input() book: IBook;

  constructor() {}

  ngOnInit() {}
}
