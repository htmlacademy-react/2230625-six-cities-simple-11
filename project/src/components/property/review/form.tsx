import {PropertyReviewFormRating} from './rating';
import {FormEvent, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentAction, fetchReviewsAction} from "../../../store/api-actions";
import {Comment} from "../../../types/comment";
import {useAppDispatch, useAppSelector} from "../../../hooks";

export function PropertyReviewForm() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);
  const [review, setReview] = useState<Comment>({rating: 0, comment: ''});
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (params.id && review.rating != 0) {
      dispatch(commentAction({id: params.id, comment: review}));
      dispatch(fetchReviewsAction(params.id));
    }
  };

  return (
    <form className="reviews__form form" action="/#" method="post" ref={inputRef} onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <PropertyReviewFormRating
        ratingCallback={(name, value) => setReview({...review, [name]: value})}
      />
      <textarea className="reviews__textarea form__textarea"
                id="review"
                name="comment"
                placeholder="Tell how was your stay, what you like and what can be improved"
                onChange={({target: {name, value}}) => setReview({...review, [name]: value})}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}
