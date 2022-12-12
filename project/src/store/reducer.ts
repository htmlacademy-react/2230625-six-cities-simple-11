import {createReducer} from '@reduxjs/toolkit';
import {
  changeLocation,
  getPlaceInfo, getReviews,
  loadPlaces,
  requireAuthorization,
  setPlacesDataLoadingStatus,
  setSort
} from './actions';
import {Popular, SortType} from "../types/sortTypes";
import {AuthorizationStatus} from "../const";
import {Place, Places} from "../types/place";
import {User} from "../types/user";
import {Review} from "../types/review";

type InitialState = {
  sort: SortType,
  locationName: string,
  places: Places,
  isPlacesDataLoading: boolean,
  authorizationStatus: AuthorizationStatus,
  authorizationUser?: User,
  selectedHotel?: Place,
  reviews: Review[]
}

const initialState: InitialState = {
  sort: Popular,
  locationName: 'Paris',
  places: [],
  isPlacesDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  reviews: []
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
    .addCase(getPlaceInfo, (state, action) => {
      state.selectedHotel = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
);

export {reducer};
