import {useParams} from 'react-router-dom';
import {PropertyMark} from '../../components/property/mark';
import {PropertyName} from '../../components/property/name';
import {PropertyRating} from '../../components/property/rating';
import {PropertyFutures} from '../../components/property/futures';
import {PropertyPrice} from '../../components/property/price';
import {PropertyInside} from '../../components/property/inside';
import NotFoundPage from '../not-found-page/not-found-page';
import {PropertyHost} from '../../components/property/host';
import {PropertyReviews} from '../../components/property/reviews';
import {PropertyGallery} from '../../components/property/galery';
import {PropertyNearPlaces} from '../../components/property/near-places';
import Map from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchHotelAction, fetchNearPlaces, fetchReviewsAction} from '../../store/api-actions';
import {Spinner} from '../../components/spinner/spinner';

function PropertyPage(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchHotelAction(params.id));
      dispatch(fetchReviewsAction(params.id));
      dispatch(fetchNearPlaces(params.id));
    }}, [params.id, dispatch]
  );

  const placeCard = useAppSelector((state) => state.selectedHotel);
  const nearPlaces = useAppSelector((state) => state.nearPlaces).slice(0, 3);
  const isDataLoading = useAppSelector((state) => state.isPlaceDataLoading);
  if (isDataLoading) {
    return (
      <Spinner />
    );
  }

  return (placeCard === undefined ? <NotFoundPage /> :
    <div className="page">
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery gallery={placeCard.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {placeCard.isPremium && <PropertyMark mark={'Premium'} />}
              <PropertyName name={placeCard.title} />
              <PropertyRating rating={placeCard.rating} />
              <PropertyFutures type={placeCard.type} bedrooms={placeCard.bedrooms} maxAdults={placeCard.maxAdults} />
              <PropertyPrice price={placeCard.price} />
              <PropertyInside inside={placeCard.goods} />
              <PropertyHost host={placeCard.host} description={placeCard.description} />
              <PropertyReviews />
            </div>
          </div>
          <Map className="property__map" city={placeCard.city} placeCardList={[...nearPlaces, placeCard]} selectedPlaceCard={placeCard} />
        </section>
        <div className="container">
          <PropertyNearPlaces nearPlacesList={nearPlaces} />
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
