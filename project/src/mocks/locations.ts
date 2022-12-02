import {LocationList, LocationType} from '../types/locationType';

export const Paris: LocationType = {
  id: 0,
  href: '/#',
  name: 'Paris',
  points: {lat: 48.85341, lng: 2.3488},
  zoom: 10,
}

export const Cologne: LocationType = {
  id: 1,
  href: '/#',
  name: 'Cologne',
  points: {lat: 45.57862, lng: 9.9418},
  zoom: 10,
}

export const Brussels: LocationType = {
  id: 2,
  href: '/#',
  name: 'Brussels',
  points: {lat: 50.85045, lng: 4.34878},
  zoom: 10,
}

export const Amsterdam: LocationType = {
  id: 3,
  href: '/#',
  name: 'Amsterdam',
  points: {lat: 52.37403, lng: 4.88969},
  zoom: 10,
}

export const Hamburg: LocationType = {
  id: 4,
  href: '/#',
  name: 'Hamburg',
  points: {lat: 53.57532, lng: 10.01534},
  zoom: 10,
}

export const Dusseldorf: LocationType = {
  id: 5,
  href: '/#',
  name: 'Dusseldorf',
  points: {lat: 51.22172, lng: 6.77616},
  zoom: 10,
}

export const locationList: LocationList = [
  Paris,
  Cologne,
  Brussels,
  Amsterdam,
  Hamburg,
  Dusseldorf,
];
