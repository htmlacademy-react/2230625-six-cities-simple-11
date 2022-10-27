type PlaceCardProps = {
    image: string;
    mark?: string;
    price: number;
    name: string;
    type: string;
    ratingWidth: string;
}

function PlaceCard(props: PlaceCardProps) : JSX.Element {
  return (
    <article className="cities__card place-card">
      {
        props.mark ? (
          <div className="place-card__mark">
            <span>{props.mark}</span>
          </div>
        ) : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={props.image} width="260" height="200" alt="Place card"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: props.ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{props.name}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;