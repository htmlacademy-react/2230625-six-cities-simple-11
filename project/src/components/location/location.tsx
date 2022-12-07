import {LocationType} from '../../types/location-type';
import {useAppDispatch} from '../../hooks';
import {changeLocation} from '../../store/actions';

type LocationProps = {
  location: LocationType;
}

function Location({location} : LocationProps) {
  const dispatch = useAppDispatch();

  return(
    <li className="locations__item" onClick={() => dispatch(changeLocation(location))}>
      <a className="locations__item-link tabs__item" href={location.href}>
        <span>{location.name}</span>
      </a>
    </li>
  );
}

export default Location;
