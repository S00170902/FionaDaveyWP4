import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IBook } from "../shared/ibook";
import { BookSerializer } from "../shared/bookSerializier";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BookService {
  apiKey: string = "AIzaSyB1i-Kd3UbAqFcVVYNkG1yM_bmI8towM_4";
  url: string = "https://www.googleapis.com/books/v1/volumes";
  private bookConverter: BookSerializer = new BookSerializer();

  constructor(private _http: HttpClient) {}

  search(query: string) {
    const params = new HttpParams().set("?q", query).set("key", this.apiKey);
    return this._http
      .get(this.url + params)
      .pipe(
        map((data: any) =>
          data.items ? this.convertCollection(data.items) : []
        )
      );
  }

  getBook(id: string) {
    const params = new HttpParams()
      .set("?projection", "lite")
      .set("key", this.apiKey);
    return this._http
      .get(this.url + "/" + id + params)
      .pipe(
        map((data: any) =>
          data.items ? this.convertCollection(data.items) : []
        )
      );
  }

  private convertCollection(collection: any[]): IBook[] {
    return collection.map(item => this.bookConverter.fromJson(item));
  }
}
