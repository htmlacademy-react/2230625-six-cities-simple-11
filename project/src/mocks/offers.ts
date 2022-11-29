import {PlaceCardList, PlaceType} from '../types/place-card-type';

const insidePlace = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
export const placeCardList: PlaceCardList = [
  {
    id: '1',
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
  },
  {
    id: '2',
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
  },
  {
    id: '3',
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
  },
  {
    id: '4',
    image: 'img/apartment-03.jpg',
    price: {
      value: 180,
      text: 'night'
    },
    name: 'Nice, cozy, warm big bed apartment',
    ratingStars: 5,
    ratingValue: 4.8,
    futures: {
      entire: PlaceType.Apartment,
      bedrooms: 3,
      adults: 4
    },
    isPremium: true,
    inside: insidePlace,
  },
  {
    id: '5',
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
  },
];
