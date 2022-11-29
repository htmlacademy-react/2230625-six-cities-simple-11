import {PropertyReviewList} from './review/list';
import {PropertyReviewForm} from './review/form';

export function PropertyReviews() {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <PropertyReviewList />
      <PropertyReviewForm />
    </section>
  );
}
