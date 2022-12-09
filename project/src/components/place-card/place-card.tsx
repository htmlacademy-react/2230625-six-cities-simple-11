import {Place} from '../../types/place';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getRatingWidthPercent} from "../../utils";

type PlaceCardProps = {
  placeCard: Place;
  onMouseEnterCallback: () => void;
}

function PlaceCard({placeCard, onMouseEnterCallback}: PlaceCardProps) : JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnterCallback}>
      {placeCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${placeCard.id}`} preventScrollReset >
          <img className="place-card__image" src={placeCard.previewImage} width="260" height="200" alt="Place card"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeCard.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidthPercent(placeCard.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${placeCard.id}`} preventScrollReset>{placeCard.title}</Link>
        </h2>
        <p className="place-card__type">{placeCard.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
