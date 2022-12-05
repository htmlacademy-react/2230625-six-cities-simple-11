import {PlaceCardList} from '../../types/place-card-type';
import {LocationList} from '../../types/location-type';
import LocationContainer from '../../components/location-container/location-container';
import PlacesContainer from '../../components/places-container/places-container';

type MainScreenProps = {
  placeCardList: PlaceCardList;
  locationList: LocationList;
}

function MainPage({placeCardList, locationList}: MainScreenProps) : JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationContainer locationList={locationList} />
      </div>
      <div className="cities">
        <PlacesContainer placeCardList={placeCardList} />
      </div>
    </main>
  );
}

export default MainPage;
