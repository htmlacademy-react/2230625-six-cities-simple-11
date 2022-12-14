import {starsList} from '../../../const';

type PropertyReviewFormRatingProps = {
  rating: number;
  ratingCallback: (name: string, value: string) => void;
}

export function PropertyReviewFormRating({rating, ratingCallback}: PropertyReviewFormRatingProps) {
  const onChangeHandler = ({target: {name, value}}: {target: {name: string; value: string}}) => {
    ratingCallback(name, value);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {
        starsList.map((item, index) => (
          <>
            <input
              className="form__rating-input visually-hidden" name="rating" value={item.value} id={item.id} type="radio"
              onChange={onChangeHandler}
              checked={item.value.toString() === rating.toString()}
            />
            <label htmlFor={item.id} className="reviews__rating-label form__rating-label" title={item.title}>
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
