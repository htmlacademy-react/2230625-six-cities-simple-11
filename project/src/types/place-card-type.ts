import {LocationType} from './location-type';
import {RatingStars, Review} from './review-type';

export enum PlaceType {
  Apartment = 'Apartment',
  Private = 'Private room'
}

export type UserType = {
  avatar: string;
  name: string;
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

export type Point = {
  lat: number;
  lng: number;
}

export type PlaceCardType = {
  id: number;
  image: string;
  price: Price;
  name: string;
  ratingStars: RatingStars;
  ratingValue: number;
  futures: Futures;
  isPremium?: boolean;
  inside: string[];
  reviews: Review[];
  city: LocationType;
  point: Point;
}

export type PlaceCardList = PlaceCardType[];
