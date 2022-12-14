import LocationContainer from '../../components/location-container/location-container';
import PlacesContainer from '../../components/places-container/places-container';
import {useAppSelector} from '../../hooks';
import cn from 'classnames';

function MainPage() : JSX.Element {
  const locationName = useAppSelector((state) => state.locationName);
  const placeCardList = useAppSelector((state) => state.places);
  const sort = useAppSelector((state) => state.sort);
  const filteredPlaces = [...placeCardList.filter((item) => item.city.name === locationName)].sort(sort.compare);

  return (
    <div className="page page--gray page--main">
      <main className={cn('page__main', 'page__main--index', {'page__main--index-empty': !filteredPlaces.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationContainer />
        <PlacesContainer placeCardList={filteredPlaces} locationName={locationName}/>
      </main>
    </div>
  );
}

export default MainPage;
