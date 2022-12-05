import {RatingStars} from '../../../types/review-type';

type PropertyReviewFormRatingProps = {
  ratingCallback: (name: string, value: RatingStars) => void;
}

export function PropertyReviewFormRating({ratingCallback}: PropertyReviewFormRatingProps) {
  const ratingList: RatingStars[] = [5, 4, 3, 2, 1];
  return (
    <div className="reviews__rating-form form__rating">
      {
        ratingList.map((item) => (
          <>
            <input className="form__rating-input visually-hidden" name="rating" value={item} id={`${item}-stars`} type="radio"
              onChange={({target: {name, value}}) => {ratingCallback(name, +value as RatingStars);}}
            />
            <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))
      }
    </div>
  );
}
