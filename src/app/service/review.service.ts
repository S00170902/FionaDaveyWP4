import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
import { IReview } from "../shared/ireview";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ReviewService {
  reviewCollection: AngularFirestoreCollection<IReview>;
  reviews: Observable<IReview[]>;
  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.reviewCollection = this._afs.collection<IReview>("reviews");
  }

  getReviews(): Observable<IReview[]> {
    this.reviews = this.reviewCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as IReview;
          console.log("getReviews:data" + JSON.stringify(data));
          const id = a.payload.doc.id;
          console.log("getReviews:id" + id);
          return { id, ...data };
        })
      )
    );
    return this.reviews;
  }

  addReview(newReview: IReview): void {
    this.reviewCollection.add(newReview);
  }
}
