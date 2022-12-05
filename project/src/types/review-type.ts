import {UserType} from './place-card-type';

export type RatingStars = 0|1|2|3|4|5

export type Review = {
  user?: UserType;
  rating: RatingStars;
  text: string;
  date: Date;
}
