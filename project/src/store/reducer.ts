import {createReducer} from '@reduxjs/toolkit';
import {Paris} from '../mocks/locations';
import {placeCardList} from '../mocks/offers';
import {changeLocation} from './actions';

const initialState = {
  location: Paris,
  places: placeCardList
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    }
    )
);

export {reducer};
