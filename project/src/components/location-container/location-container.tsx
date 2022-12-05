import Location from '../../components/location/location';
import {LocationList} from '../../types/location-type';

type LocationContainerProps = {
  locationList: LocationList;
}

function LocationContainer({locationList} : LocationContainerProps) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationList.map((item) => <Location location={item}/>)}
      </ul>
    </section>
  );
}

export default LocationContainer;
