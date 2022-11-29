import {Price} from '../../types/place-card-type';

export function PropertyPrice({price}: {price: Price}) {
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price.value}</b>
      <span className="property__price-text">&nbsp;{price.text}</span>
    </div>
  );
}
