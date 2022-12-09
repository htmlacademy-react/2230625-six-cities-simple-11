import {useAppDispatch} from '../../hooks';
import {changeLocation} from '../../store/actions';

type LocationProps = {
  locationName: string;
}

function Location({locationName} : LocationProps) {
  const dispatch = useAppDispatch();

  return(
    <li className="locations__item" onClick={() => dispatch(changeLocation(locationName))}>
      <a className="locations__item-link tabs__item" href={'#'}>
        <span>{locationName}</span>
      </a>
    </li>
  );
}

export default Location;
