export class IBook {
  constructor(
    public id: string,
    public title?: string,
    public subtitle?: string,
    public authors?: string,
    public description?: string,
    public publishedDate?: string,
    public pageCount?: number | null,
    public previewLink?: string,
    public infoLink?: string,
    public averageRating?: number | null,
    public categories?: string[],
    public smallThumbnailUrl?: string,
    public coverUrl?: string,
    public rating?: number
  ) {}
}
