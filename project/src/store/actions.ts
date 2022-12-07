import {createAction} from '@reduxjs/toolkit';
import {LocationType} from '../types/location-type';
import {SortType} from "../mocks/sortTypes";

export const changeLocation = createAction<LocationType>('changeLocation');
export const setSort = createAction<SortType>('setSort');
export const fillPlaces = createAction('fillPlaces');
