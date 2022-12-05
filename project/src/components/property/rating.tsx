import {RatingStars} from '../../types/review-type';
import {getRatingWidthPercent} from '../../utils';

type PropertyRatingProps = {
  ratingStars: RatingStars;
  ratingValue: number;
}

export function PropertyRating({ratingStars, ratingValue}: PropertyRatingProps) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: getRatingWidthPercent(ratingStars)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{ratingValue}</span>
    </div>
  );
}
