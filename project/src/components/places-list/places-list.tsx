import PlaceCard from '../place-card/place-card';
import {Places, Place} from '../../types/place';
import cn from 'classnames';

type PlacesListProps= {
  className: string;
  placeCardList: Places;
  onMouseEnterCallback?: (item: Place) => void;
}

function PlaceList({className, placeCardList, onMouseEnterCallback} : PlacesListProps) {
  return (
    <div className={cn(className, 'places__list', 'tabs__content')}>
      {placeCardList.map((item) =>
        (
          <PlaceCard
            key={item.id}
            placeCard={item}
            onMouseEnterCallback={() => onMouseEnterCallback && onMouseEnterCallback(item)}
          />
        )
      )}
    </div>
  );
}

export default PlaceList;
