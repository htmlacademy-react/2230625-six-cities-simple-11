import {useParams} from 'react-router-dom';
import {placeCardList} from '../../mocks/offers';
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
import {Amsterdam} from '../../mocks/locations';

function PropertyPage(): JSX.Element {
  const params = useParams();
  const placeCard = placeCardList.find((item) => item.id.toString() === params.id);
  const nearPlacesList = placeCardList.filter((item) => item !== placeCard).slice(0, 3);

  return (placeCard === undefined ? <NotFoundPage /> :
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery />
        <div className="property__container container">
          <div className="property__wrapper">
            {placeCard.isPremium && <PropertyMark mark={'Premium'} />}
            <PropertyName name={placeCard.name} />
            <PropertyRating ratingStars={placeCard.ratingStars} ratingValue={placeCard.ratingValue} />
            <PropertyFutures futures={placeCard.futures} />
            <PropertyPrice price={placeCard.price} />
            <PropertyInside inside={placeCard.inside} />
            <PropertyHost />
            <PropertyReviews reviewList={placeCard.reviews} />
          </div>
        </div>
        <Map className="property__map" city={placeCard.city} placeCardList={[...nearPlacesList, placeCard]} selectedPlaceCard={placeCard} />
      </section>
      <div className="container">
        <PropertyNearPlaces nearPlacesList={nearPlacesList} />
      </div>
    </main>
  );
}

export default PropertyPage;
