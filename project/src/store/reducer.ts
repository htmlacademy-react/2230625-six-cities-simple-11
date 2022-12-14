import {createReducer} from '@reduxjs/toolkit';
import {
  changeLocation, getNearPlaces,
  getPlaceInfo, getReviews,
  loadPlaces, loginUser,
  requireAuthorization, setPlaceDataLoadingStatus,
  setPlacesDataLoadingStatus, setReviewsDataLoadingStatus,
  setSort
} from './actions';
import {Popular, SortType} from '../types/sortTypes';
import {AuthorizationStatus} from '../const';
import {Place, Places} from '../types/place';
import {Review} from '../types/review';
import {UserData} from '../types/user-data';

type InitialState = {
  sort: SortType;
  locationName: string;
  places: Places;
  isPlaceDataLoading: boolean;
  isPlacesDataLoading: boolean;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  authorizationUser?: UserData;
  selectedHotel?: Place;
  nearPlaces: Places;
  reviews: Review[];
}

const initialState: InitialState = {
  sort: Popular,
  locationName: 'Paris',
  places: [],
  isPlaceDataLoading: false,
  isPlacesDataLoading: false,
  isReviewsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  nearPlaces: [],
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
    .addCase(setPlaceDataLoadingStatus, (state, action) => {
      state.isPlaceDataLoading = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getPlaceInfo, (state, action) => {
      state.selectedHotel = action.payload;
    })
    .addCase(getNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loginUser, (state, action) => {
      state.authorizationUser = action.payload;
    })
);

export {reducer};
