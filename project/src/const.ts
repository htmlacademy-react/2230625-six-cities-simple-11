export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer'
}

export enum APIRoute {
  Hotels = '/hotels',
  Nearby = '/hotels/:Id/nearby',
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
