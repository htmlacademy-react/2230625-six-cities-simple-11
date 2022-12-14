import {SortType, sortTypes} from "../../types/sortTypes";
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setSort} from "../../store/actions";
import {useState} from "react";


export function PlacesSorting() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const sort = useAppSelector((state) => state.sort);
  const onSortClick = (item: SortType) => {
    dispatch(setSort(item));
    setOpen(false);
  }
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={sort.tabIndex}
        onClick={() => setOpen(!open)}
      >
        {sort.text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn("places__options", "places__options--custom", {"places__options--opened": open})}
        onMouseLeave={() => setOpen(false)}
      >
        {sortTypes.map(item => (
          <li
            key={item.tabIndex}
            onClick={() => onSortClick(item)}
            tabIndex={item.tabIndex}
            className={cn("places__option", {"places__option--active": item.tabIndex === sort.tabIndex})}
          >{item.text}
          </li>
        ))}
      </ul>
    </form>
  );
}
