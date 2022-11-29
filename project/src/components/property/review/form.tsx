import {PropertyReviewFormRating} from './rating';

import {Review} from '../../../types/place-card-type';
import {useState} from 'react';

export function PropertyReviewForm() {
  const [review, setReview] = useState<Review>({rating: 0, review: '', time: new Date().toDateString()});

  return (
    <form className="reviews__form form" action= "/#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <PropertyReviewFormRating
        ratingCallback={(name, value) => setReview({...review, [name]: value})}
      />
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target: {name, value}}) => setReview({...review, [name]: value})}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}
