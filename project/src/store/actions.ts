import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';
import {SortType} from "../types/sortTypes";
import {Places} from "../types/place";
import {AuthorizationStatus} from "../const";

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const changeLocation = createAction<string>('user/changeLocation');

export const setSort = createAction<SortType>('user/setSort');

export const loadPlaces = createAction<Places>('data/loadPlaces');

export const setPlacesDataLoadingStatus = createAction<boolean>('data/setPlacesDataLoadingStatus');
