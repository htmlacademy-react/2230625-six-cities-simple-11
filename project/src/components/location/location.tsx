import cn from 'classnames';

type LocationProps = {
  locationName: string;
  isActive: boolean;
  setActiveLocationCallback: () => void;
}

function Location({locationName, isActive, setActiveLocationCallback} : LocationProps) {
  return(
    <li className="locations__item" onClick={setActiveLocationCallback}>
      <a className={cn('locations__item-link tabs__item', {'tabs__item--active': isActive})} href="/#">
        <span>{locationName}</span>
      </a>
    </li>
  );
}

export default Location;
