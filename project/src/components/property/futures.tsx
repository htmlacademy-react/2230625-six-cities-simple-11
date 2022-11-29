import {Futures} from '../../types/place-card-type';

export function PropertyFutures({futures}: {futures: Futures}) {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {futures.entire}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${futures.bedrooms} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${futures.adults} adults`}
      </li>
    </ul>
  );
}
