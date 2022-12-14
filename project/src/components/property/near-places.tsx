import {Places} from '../../types/place';
import PlaceList from '../places-list/places-list';

type PropertyNearPlacesProps = {
  nearPlacesList: Places;
}

export function PropertyNearPlaces({nearPlacesList} : PropertyNearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceList className="near-places__list" placeCardList={nearPlacesList} />
    </section>
  );
}
