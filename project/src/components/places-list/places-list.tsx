import PlaceCard from '../place-card/place-card';
import {PlaceCardList, PlaceCardType} from '../../types/place-card-type';
import cn from 'classnames';

type PlacesListProps= {
  className: string;
  placeCardList: PlaceCardList;
  onMouseEnterCallback: (item: PlaceCardType) => void;
}
function PlaceList({className, placeCardList, onMouseEnterCallback} : PlacesListProps) {
  return (
    <div className={cn(className, 'places__list', 'tabs__content')}>
      {placeCardList.map((item) => <PlaceCard key={item.id} placeCard={item} onMouseEnterCallback={() => onMouseEnterCallback(item)}/>)}
    </div>
  );
}

export default PlaceList;
