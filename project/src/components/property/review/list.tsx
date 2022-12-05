import {PropertyReviewItem} from './rewiew';
import {Review} from '../../../types/review-type';

type PropertyReviewListProps = {
  reviewList: Review[];
}

export function PropertyReviewList({reviewList}: PropertyReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviewList.map((item) =>
        (
          <li className="reviews__item">
            <PropertyReviewItem review={item} />
          </li>
        )
      )}
    </ul>
  );
}
