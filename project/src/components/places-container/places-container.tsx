import {PlaceCardType} from '../../types/place-card-type';
import {useState} from 'react';
import Map from '../map/map';
import PlaceList from '../places-list/places-list';
import {useAppSelector} from '../../hooks';

function PlacesContainer() {
  const location = useAppSelector((state) => state.location);
  const placeCardList = useAppSelector((state) => state.places).filter((item) => item.city === location);
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
        <form className="places__sorting" action="/project/src/pages#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--closed">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={1}>Price: low to high</li>
            <li className="places__option" tabIndex={2}>Price: high to low</li>
            <li className="places__option" tabIndex={3}>Top rated first</li>
          </ul>
        </form>
        <PlaceList className="cities__places-list" placeCardList={placeCardList} onMouseEnterCallback={setActive} />
      </section>
      <div className="cities__right-section">
        {Boolean(placeCardList.length) && <Map className="cities__map" city={location} placeCardList={placeCardList} selectedPlaceCard={active} />}
      </div>
    </div>
  );
}

export default PlacesContainer;
