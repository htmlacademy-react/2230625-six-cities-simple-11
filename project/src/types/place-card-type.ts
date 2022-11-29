export enum PlaceType {
  Apartment = 'Apartment',
  Private = 'Private room'
}

export type RatingStars = 0|1|2|3|4|5

export type Review = {
  user?: string;
  rating: RatingStars;
  review: string;
  time: string;
}

export type Futures = {
  entire: PlaceType;
  bedrooms: number;
  adults: number;
}

export type Price = {
  value: number;
  text: string;
}

export type PlaceCardType = {
  id: string;
  image: string;
  price: Price;
  name: string;
  ratingStars: RatingStars;
  ratingValue: number;
  futures: Futures;
  isPremium?: boolean;
  inside: string[];
  reviews?: Review[];
}

export type PlaceCardList = PlaceCardType[];
