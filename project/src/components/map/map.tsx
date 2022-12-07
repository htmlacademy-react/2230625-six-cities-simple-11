import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import useMap from './useMap';
import {LocationType} from '../../types/location-type';
import {PlaceCardType} from '../../types/place-card-type';
import cn from 'classnames';

type mapProps = {
  city: LocationType;
  placeCardList: PlaceCardType[];
  selectedPlaceCard?: PlaceCardType;
  className: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, placeCardList, selectedPlaceCard, className} : mapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.panTo({lat: city.points.lat, lng:city.points.lng});
      placeCardList?.forEach((placeCard) => {
        leaflet
          .marker({
            lat: placeCard.point.lat,
            lng: placeCard.point.lng,
          }, {
            icon: (placeCard.id === selectedPlaceCard?.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, placeCardList, selectedPlaceCard, city]);


  return (
    <section className={cn(className, 'map')} ref={mapRef}></section>
  );
}


export default Map;

