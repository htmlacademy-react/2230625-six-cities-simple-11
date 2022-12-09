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
import {useAppSelector} from "../../hooks";

function PropertyPage(): JSX.Element {
  const params = useParams();
  const placeCardList = useAppSelector((state) => state.places)

  const placeCard = placeCardList.find((item) => item.id.toString() === params.id);

  return (placeCard === undefined ? <NotFoundPage /> :
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery />
        <div className="property__container container">
          <div className="property__wrapper">
            {placeCard.isPremium && <PropertyMark mark={'Premium'} />}
            <PropertyName name={placeCard.title} />
            <PropertyRating rating={placeCard.rating} />
            <PropertyFutures type={placeCard.type} bedrooms={placeCard.bedrooms} maxAdults={placeCard.maxAdults} />
            <PropertyPrice price={placeCard.price} />
            <PropertyInside inside={placeCard.goods} />
            <PropertyHost />
            <PropertyReviews />
          </div>
        </div>
        <Map className="property__map" city={placeCard.city} placeCardList={[placeCard]} selectedPlaceCard={placeCard} />
      </section>
      <div className="container">
        <PropertyNearPlaces nearPlacesList={[]} />
      </div>
    </main>
  );
}

export default PropertyPage;
