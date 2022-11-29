import {RatingStars} from '../../types/place-card-type';

type PropertyRatingProps = {
  ratingStars: RatingStars;
  ratingValue: number;
}

export function PropertyRating({ratingStars, ratingValue}: PropertyRatingProps) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: `${100 * ratingStars / 5 }%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{ratingValue}</span>
    </div>
  );
}
