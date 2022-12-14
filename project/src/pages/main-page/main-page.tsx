import LocationContainer from '../../components/location-container/location-container';
import PlacesContainer from '../../components/places-container/places-container';

function MainPage() : JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationContainer />
      <PlacesContainer />
    </main>
  );
}

export default MainPage;
