import {PlaceCardList} from '../../types/place-card-type';
import PlaceList from '../places-list/places-list';

type PropertyNearPlacesProps = {
  nearPlacesList: PlaceCardList;
}

export function PropertyNearPlaces({nearPlacesList} : PropertyNearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceList className="near-places__list" placeCardList={nearPlacesList} onMouseEnterCallback={() => {}} />
    </section>
  );
}
