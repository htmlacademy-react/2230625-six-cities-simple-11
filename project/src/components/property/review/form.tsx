import {PropertyReviewFormRating} from './rating';
import {FormEvent, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentAction} from "../../../store/api-actions";
import {Comment} from "../../../types/comment";
import {useAppDispatch} from "../../../hooks";

export function PropertyReviewForm() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [review, setReview] = useState<Comment>({rating: 0, comment: ''});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (params.id && review.rating != 0) {
      dispatch(commentAction({id: params.id, comment: review}));
      setReview({rating: 0, comment: ''});
    }
  };

  return (
    <form className="reviews__form form" action="/#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <PropertyReviewFormRating
        rating={review.rating}
        ratingCallback={(name, value) => setReview({...review, [name]: value})}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        value={review.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target: {name, value}}) => setReview({...review, [name]: value.substring(0, 300)})}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={review.comment.length < 50 || review.rating === 0}>Submit</button>
      </div>
    </form>
  );
}
