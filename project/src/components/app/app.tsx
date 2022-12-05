import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PropertyPage from '../../pages/property-page/property-page';
import LoginPage from '../../pages/login-page/login-page';
import Header from '../header/header';
import {PlaceCardList} from '../../types/place-card-type';
import {LocationList} from '../../types/location-type';


type AppScreenProps = {
  placeCardList: PlaceCardList;
  locationList: LocationList;
}

function App({placeCardList, locationList}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index
            path={AppRoute.Main}
            element={
              <MainPage
                placeCardList={placeCardList}
                locationList={locationList}
              />
            }
          />
          <Route
            path={`${AppRoute.Room}/:id`}
            element={<PropertyPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
