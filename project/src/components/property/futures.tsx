type PropertyFuturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export function PropertyFutures({type, bedrooms, maxAdults}: PropertyFuturesProps) {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${bedrooms} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  );
}
