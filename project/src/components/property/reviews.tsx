import {PropertyReviewList} from './review/list';
import {PropertyReviewForm} from './review/form';
import {Review} from '../../types/review';

type PropertyReviewsProps = {
  reviewList: Review[];
}

export function PropertyReviews() {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{0}</span></h2>
      <PropertyReviewList reviewList={[]}/>
      <PropertyReviewForm />
    </section>
  );
}
