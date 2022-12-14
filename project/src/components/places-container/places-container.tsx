import Map from '../map/map';
import PlaceList from '../places-list/places-list';
import {useAppSelector} from '../../hooks';
import {PlacesSorting} from '../places-options/places-options';
import {Spinner} from '../spinner/spinner';
import cn from 'classnames';
import {Place, Places} from '../../types/place';
import {useState} from 'react';

function PlacesContainer({placeCardList, locationName}: {placeCardList: Places; locationName: string}) {
  const [activePlaceCart, setActivePlaceCard] = useState<Place | undefined>();

  const isDataLoading = useAppSelector((state) => state.isPlacesDataLoading);
  if (isDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="cities">
      <div className={cn('cities__places-container', {'cities__places-container--empty': !placeCardList.length}, 'container')}>
        {placeCardList.length ?
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{`${placeCardList.length} places to stay in ${locationName}`}</b>
            <PlacesSorting />
            <PlaceList className="cities__places-list" placeCardList={placeCardList} onMouseEnterCallback={setActivePlaceCard} />
          </section> :
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">{`We could not find any property available at the moment in ${locationName}`} </p>
            </div>
          </section>}
        <div className="cities__right-section">
          {Boolean(placeCardList.length) && <Map className="cities__map" city={placeCardList[0].city} placeCardList={placeCardList} selectedPlaceCard={activePlaceCart} />}
        </div>
      </div>
    </div>
  );
}

export default PlacesContainer;
