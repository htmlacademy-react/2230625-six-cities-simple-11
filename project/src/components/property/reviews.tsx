import {PropertyReviewList} from './review/list';
import {PropertyReviewForm} from './review/form';
import {Review} from '../../types/review-type';

type PropertyReviewsProps = {
  reviewList: Review[];
}

export function PropertyReviews({reviewList}: PropertyReviewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
      <PropertyReviewList reviewList={reviewList}/>
      <PropertyReviewForm />
    </section>
  );
}
