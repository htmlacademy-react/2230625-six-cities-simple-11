import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import PlaceCard from './components/place-card/place-card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App>
      <PlaceCard
        image="img/apartment-01.jpg"
        price={120}
        name="Beautiful &amp; luxurious apartment at great location"
        ratingWidth="80%"
        type="Apartment"
        mark="Premium"
      />
      <PlaceCard
        image="img/room.jpg"
        price={80}
        name="Wood and stone place"
        ratingWidth="80%"
        type="Private room"
      />
      <PlaceCard
        image="img/apartment-02.jpg"
        price={132}
        name="Canal View Prinsengracht"
        ratingWidth="80%"
        type="Apartment"
      />
      <PlaceCard
        image="img/apartment-03.jpg"
        price={180}
        name="Nice, cozy, warm big bed apartment"
        ratingWidth="100%"
        type="Apartment"
        mark="Premium"
      />
      <PlaceCard
        image="img/room.jpg"
        price={80}
        name="Wood and stone place"
        ratingWidth="80%"
        type="Private room"
      />
    </App>
  </React.StrictMode>,
);
