import {City} from './city';
import {User} from "./user";
import {Location} from "./location";

export type Place = {
  bedrooms: number;
  city: City;
  description: string
  goods: [string]
  host: User;
  id: number
  images: [string]
  isPremium: boolean
  location: Location
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}

export type Places = Place[];
