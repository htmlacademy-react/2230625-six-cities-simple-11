import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, loadPlaces, requireAuthorization, setPlacesDataLoadingStatus, setSort} from './actions';
import {Popular, SortType} from "../types/sortTypes";
import {AuthorizationStatus} from "../const";
import {Places} from "../types/place";

type InitialState = {
  sort: SortType,
  locationName: string,
  places: Places,
  isPlacesDataLoading: boolean,
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  sort: Popular,
  locationName: 'Paris',
  places: [],
  isPlacesDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeLocation, (state, action) => {
      state.locationName = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(loadPlaces, (state, action) => {
      state.places = action.payload;
    })
    .addCase(setPlacesDataLoadingStatus, (state, action) => {
      state.isPlacesDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
);

export {reducer};
