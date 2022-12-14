import {PropertyReviewItem} from './rewiew';
import {useAppSelector} from "../../../hooks";
import {Spinner} from "../../spinner/spinner";

const compareDateStrings = (date1: string, date2: string) => new Date(date2).getTime() - new Date(date1).getTime();

export function PropertyReviewList() {
  const reviewList = useAppSelector((state) => state.reviews);
  const isDataLoading = useAppSelector((state) => state.isReviewsDataLoading);
  if (isDataLoading) {
    return (
      <Spinner />
    );
  }

  const filteredReviewList = [...reviewList]
    .sort((item1, item2) => compareDateStrings(item1.date, item2.date))
    .slice(0, 10);

  return (
    <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
    <ul className="reviews__list">
      {filteredReviewList.map((item) => <PropertyReviewItem key={item.id} review={item} />)}
    </ul>
    </>
  );
}
