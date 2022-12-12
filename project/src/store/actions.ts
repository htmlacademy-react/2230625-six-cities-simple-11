import {createAction} from '@reduxjs/toolkit';
import {SortType} from "../types/sortTypes";
import {Place, Places} from "../types/place";
import {AuthorizationStatus} from "../const";
import {Review} from "../types/review";

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const changeLocation = createAction<string>('user/changeLocation');

export const setSort = createAction<SortType>('user/setSort');

export const loadPlaces = createAction<Places>('data/loadPlaces');

export const getPlaceInfo = createAction<Place>('data/getPlaceInfo')

export const getReviews = createAction<Review[]>('data/getReviews')

export const setPlacesDataLoadingStatus = createAction<boolean>('data/setPlacesDataLoadingStatus');
