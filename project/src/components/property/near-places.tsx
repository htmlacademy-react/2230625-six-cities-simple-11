import {PlaceCardList, PlaceCardType} from '../../types/place-card-type';
import PlaceList from '../places-list/places-list';

type PropertyNearPlacesProps = {
  nearPlacesList: PlaceCardList;
  setActiveNearPlaceCallback: (placeCard?: PlaceCardType) => void;
}

export function PropertyNearPlaces({nearPlacesList, setActiveNearPlaceCallback} : PropertyNearPlacesProps) {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceList className="near-places__list" placeCardList={nearPlacesList} onMouseEnterCallback={setActiveNearPlaceCallback} />
    </section>
  );
}
