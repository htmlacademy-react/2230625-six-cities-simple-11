import {LocationType} from '../../types/locationType';

type LocationProps = {
  location: LocationType;
}

function Location({location} : LocationProps) {
  return(
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href={location.href}>
        <span>{location.name}</span>
      </a>
    </li>
  );
}

export default Location;
