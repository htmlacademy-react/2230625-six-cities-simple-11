import {createAction} from '@reduxjs/toolkit';
import {SortType} from '../types/sortTypes';
import {Place, Places} from '../types/place';
import {AuthorizationStatus} from '../const';
import {Review} from '../types/review';
import {UserData} from '../types/user-data';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loginUser = createAction<UserData>('user/loginUser');

export const changeLocation = createAction<string>('places/changeLocation');

export const setSort = createAction<SortType>('places/setSort');

export const loadPlaces = createAction<Places>('data/loadPlaces');

export const getPlaceInfo = createAction<Place>('data/getPlaceInfo');

export const getNearPlaces = createAction<Places>('data/getNearPlaces');

export const getReviews = createAction<Review[]>('data/getReviews');

export const setPlacesDataLoadingStatus = createAction<boolean>('data/setPlacesDataLoadingStatus');

export const setPlaceDataLoadingStatus = createAction<boolean>('data/setPlaceDataLoadingStatus');

export const setReviewsDataLoadingStatus = createAction<boolean>('data/setReviewsDataLoadingStatus');
