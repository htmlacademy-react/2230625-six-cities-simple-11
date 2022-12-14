import {PropertyReviewList} from './review/list';
import {PropertyReviewForm} from './review/form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

export function PropertyReviews() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <PropertyReviewList />
      {authorizationStatus === AuthorizationStatus.Auth && <PropertyReviewForm />}
    </section>
  );
}
