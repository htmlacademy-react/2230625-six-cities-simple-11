import {PlaceCardList, PlaceType} from '../types/place-card-type';
import {Amsterdam} from './locations';
import {reviewList} from './reviews';

const insidePlace = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
export const placeCardList: PlaceCardList = [
  {
    id: 0,
    image: 'img/apartment-01.jpg',
    price: {
      value: 120,
      text: 'night'
    },
    name: 'Beautiful & luxurious apartment at great location',
    ratingStars: 4,
    ratingValue: 4.8,
    futures: {
      entire: PlaceType.Apartment,
      bedrooms: 3,
      adults: 4
    },
    isPremium: true,
    inside: insidePlace,
    city: Amsterdam,
    point: {
      lat: 52.3909553943508, lng: 4.85309666406198
    },
    reviews: reviewList,
  },
  {
    id: 1,
    image: 'img/room.jpg',
    price: {
      value: 80,
      text: 'night'
    },
    name: 'Wood and stone place',
    ratingStars: 4,
    ratingValue: 4.8,
    futures: {
      entire: PlaceType.Private,
      bedrooms: 3,
      adults: 4
    },
    isPremium: false,
    inside: insidePlace,
    city: Amsterdam,
    point: {
      lat: 52.3609553943508, lng: 4.85309666406198
    },
    reviews: reviewList,
  },
  {
    id: 2,
    image: 'img/apartment-02.jpg',
    price: {
      value: 132,
      text: 'night'
    },
    name: 'Canal View Prinsengracht',
    ratingStars: 4,
    ratingValue: 4.8,
    futures: {
      entire: PlaceType.Apartment,
      bedrooms: 3,
      adults: 4
    },
    isPremium: false,
    inside: insidePlace,
    city: Amsterdam,
    point: {
      lat: 52.3909553943508, lng: 4.929309666406198
    },
    reviews: reviewList,
  },
  {
    id: 3,
    image: 'img/apartment-03.jpg',
    price: {
      value: 180,
      text: 'night'
    },
    name: 'Nice, cozy, warm big bed apartment',
    ratingStars: 5,
    ratingValue: 5,
    futures: {
      entire: PlaceType.Apartment,
      bedrooms: 3,
      adults: 4
    },
    isPremium: true,
    inside: insidePlace,
    city: Amsterdam,
    point: {
      lat: 52.3809553943508, lng: 4.939309666406198
    },
    reviews: reviewList,
  },
];
