import Location from '../../components/location/location';
const locationList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']

  function LocationContainer() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationList.map((item) => <Location key={item} locationName={item}/>)}
      </ul>
    </section>
  );
}

export default LocationContainer;
