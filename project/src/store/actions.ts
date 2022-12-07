import {createAction} from '@reduxjs/toolkit';
import {LocationType} from '../types/location-type';

export const changeLocation = createAction<LocationType>('changeLocation');
export const fillPlaces = createAction('fillPlaces');
