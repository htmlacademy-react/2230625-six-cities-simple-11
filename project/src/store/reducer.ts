import {createReducer} from '@reduxjs/toolkit';
import {Paris} from '../mocks/locations';
import {placeCardList} from '../mocks/offers';
import {changeLocation, setSort} from './actions';
import {Popular} from "../mocks/sortTypes";

const initialState = {
  sort: Popular,
  location: Paris,
  places: placeCardList
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    })
);

export {reducer};
