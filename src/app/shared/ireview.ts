export interface IReview {
  id?: string;
  bookId: string;
  userId: string;
  displayName?: string;
  starRating: number;
  review: string;
}
