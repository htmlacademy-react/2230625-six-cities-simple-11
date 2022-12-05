import {RatingStars} from './types/review-type';

export const getRatingWidthPercent = (ratingStars: RatingStars) => `${100 * ratingStars / 5}%`;

export const formatDate = (date: Date) => date.toLocaleDateString();

export const formatUserDate = (date: Date) => date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
