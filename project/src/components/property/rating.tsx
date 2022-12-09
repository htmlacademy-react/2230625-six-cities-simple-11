import {getRatingWidthPercent} from '../../utils';

type PropertyRatingProps = {
  rating: number;
}

export function PropertyRating({rating}: PropertyRatingProps) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: getRatingWidthPercent(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}
