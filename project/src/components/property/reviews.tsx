import {PropertyReviewList} from './review/list';
import {PropertyReviewForm} from './review/form';
import {Review} from '../../types/review';
import {useAppSelector} from "../../hooks";
import {AuthorizationStatus} from "../../const";

type PropertyReviewsProps = {
  reviewList: Review[];
}

export function PropertyReviews({reviewList}: PropertyReviewsProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
      <PropertyReviewList reviewList={reviewList}/>
      {authorizationStatus === AuthorizationStatus.Auth && <PropertyReviewForm />}
    </section>
  );
}
