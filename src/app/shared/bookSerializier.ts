import { IBook } from "./ibook";

export interface ISerializer<T> {
  fromJson(json: any): T;
  toJson(obj: T): string;
}

export class BookSerializer implements ISerializer<IBook> {
  fromJson(responseItem: any): IBook {
    const id = responseItem.id;
    const vol = responseItem.volumeInfo;
    const dateYear = new Date(vol.publishedDate).getFullYear();

    return new IBook(
      id || "",
      vol.title || "",
      vol.subtitle || "",
      (vol.authors && vol.authors.join(", ")) || "", // can be more, than 1 authors
      vol.description || "",
      isNaN(dateYear) ? "" : dateYear.toString(), // only need the year from date
      vol.pageCount || null,
      vol.previewLink || "",
      vol.infoLink || "",
      vol.averageRating || null,
      vol.categories || "",
      (vol.imageLinks && vol.imageLinks.smallThumbnail) || ""
    );
  }

  // no need
  toJson(obj: IBook): string {
    return JSON.stringify(obj);
  }
}
