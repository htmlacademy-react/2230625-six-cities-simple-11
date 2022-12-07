import {PlaceCardType} from "../types/place-card-type";

export type SortType = {
  tabIndex: number,
  text: string,
  compare: (item1: PlaceCardType, item2: PlaceCardType) => number
};

export const Popular: SortType = {
  tabIndex: 0,
  text: "Popular",
  compare: (item1: PlaceCardType, item2: PlaceCardType) => 0,
};

export const PriceLowToHigh: SortType = {
  tabIndex: 1,
  text: "Price: low to high",
  compare: (item1: PlaceCardType, item2: PlaceCardType) => item1.price.value - item2.price.value,
};

export const PriceHighToLow: SortType = {
  tabIndex: 2,
  text: "Price: high to low",
  compare: (item1: PlaceCardType, item2: PlaceCardType) => item2.price.value - item1.price.value,
};

export const TopRatedFirst: SortType =  {
  tabIndex: 3,
  text: "Top rated first",
  compare: (item1: PlaceCardType, item2: PlaceCardType) => item2.ratingValue - item1.ratingValue,
};

export const sortTypes: SortType[] = [Popular, PriceLowToHigh, PriceHighToLow, TopRatedFirst];
