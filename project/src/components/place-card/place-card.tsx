import {PlaceCardType} from '../../types/place-card-type';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type PlaceCardProps = {
  placeCard: PlaceCardType;
  onMouseOverCallback: () => void;
}

function PlaceCard({placeCard, onMouseOverCallback}: PlaceCardProps) : JSX.Element {
  return (
    <article className="cities__card place-card" onMouseOver={onMouseOverCallback}>
      {placeCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${placeCard.id}`}>
          <img className="place-card__image" src={placeCard.image} width="260" height="200" alt="Place card"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeCard.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{placeCard.price.text}</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 * placeCard.ratingStars / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{placeCard.name}</a>
        </h2>
        <p className="place-card__type">{placeCard.futures.entire}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
