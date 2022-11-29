import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {placeCardList} from './mocks/offers';
import {locationList} from './mocks/locations';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placeCardList = {placeCardList}
      locationList = {locationList}
    />
  </React.StrictMode>,
);
