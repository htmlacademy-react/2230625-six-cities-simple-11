import {Place} from './place';

export type SortType = {
  tabIndex: number;
  text: string;
  compare: (item1: Place, item2: Place) => number;
};

export const Popular: SortType = {
  tabIndex: 0,
  text: 'Popular',
  compare: (item1: Place, item2: Place) => 0,
};

export const PriceLowToHigh: SortType = {
  tabIndex: 1,
  text: 'Price: low to high',
  compare: (item1: Place, item2: Place) => item1.price - item2.price,
};

export const PriceHighToLow: SortType = {
  tabIndex: 2,
  text: 'Price: high to low',
  compare: (item1: Place, item2: Place) => item2.price - item1.price,
};

export const TopRatedFirst: SortType = {
  tabIndex: 3,
  text: 'Top rated first',
  compare: (item1: Place, item2: Place) => item2.rating - item1.rating,
};

export const sortTypes: SortType[] = [Popular, PriceLowToHigh, PriceHighToLow, TopRatedFirst];
