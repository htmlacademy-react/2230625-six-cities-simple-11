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

function PropertyPage(): JSX.Element {
  const params = useParams();
  const placeCard = placeCardList.find((item) => item.id === params.id);

  return (
    placeCard === undefined
      ? <NotFoundPage />
      : <main className="page__main page__main--property">
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
              <PropertyReviews />
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <PropertyNearPlaces />
        </div>
      </main>
  );
}

export default PropertyPage;
