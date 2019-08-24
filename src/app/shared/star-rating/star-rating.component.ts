import { Component, OnInit, Input, Output, OnChanges } from "@angular/core";
import { EventEmitter } from "events";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.css"]
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter = new EventEmitter();

  star = faStar;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.notify.emit("clicked!");
  }

  ngOnChanges(): void {
    this.starWidth = (this.rating * 90) / 5;
    console.log(this.starWidth);
  }
}
