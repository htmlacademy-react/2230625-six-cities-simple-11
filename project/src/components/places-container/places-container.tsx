import {PlaceCardType} from '../../types/place-card-type';
import {useState} from 'react';
import Map from '../map/map';
import PlaceList from '../places-list/places-list';
import {useAppSelector} from '../../hooks';
import {PlacesSorting} from "../places-options/places-options";

function PlacesContainer() {
  const location = useAppSelector((state) => state.location);
  const sort = useAppSelector((state) => state.sort);
  const placeCardList = useAppSelector((state) => state.places)
    .filter((item) => item.city === location)
    .sort(sort.compare);

  const [active, setActive] = useState<PlaceCardType>(placeCardList[0]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {placeCardList.length
            ? `${placeCardList.length} places to stay in ${location.name}`
            : 'No places to stay available'}
        </b>
        <PlacesSorting />
        <PlaceList className="cities__places-list" placeCardList={placeCardList} onMouseEnterCallback={setActive} />
      </section>
      <div className="cities__right-section">
        {Boolean(placeCardList.length) && <Map className="cities__map" city={location} placeCardList={placeCardList} selectedPlaceCard={active} />}
      </div>
    </div>
  );
}

export default PlacesContainer;
