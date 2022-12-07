import Location from '../../components/location/location';
import {locationList} from '../../mocks/locations';

function LocationContainer() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationList.map((item) => <Location key={item.id} location={item}/>)}
      </ul>
    </section>
  );
}

export default LocationContainer;
