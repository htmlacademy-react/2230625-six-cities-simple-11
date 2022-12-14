export const locationList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const starsList = [
  {title: 'perfect', value: 5, id: '5-stars'},
  {title: 'good', value: 4, id: '4-stars'},
  {title: 'not bad', value: 3, id: '3-stars'},
  {title: 'badly', value: 2, id: '2-stars'},
  {title: 'terribly', value: 1, id: '1-star'},
];

export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer'
}

export enum APIRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
