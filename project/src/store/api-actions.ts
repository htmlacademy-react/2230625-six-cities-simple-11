import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {
  getNearPlaces,
  getPlaceInfo,
  getReviews,
  loadPlaces,
  loginUser,
  requireAuthorization, setPlaceDataLoadingStatus,
  setPlacesDataLoadingStatus, setReviewsDataLoadingStatus
} from './actions';
import {Place, Places} from '../types/place';
import {Review} from '../types/review';
import {Comment} from '../types/comment';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setPlacesDataLoadingStatus(true));
    const {data} = await api.get<Places>(APIRoute.Hotels);
    dispatch(setPlacesDataLoadingStatus(false));
    dispatch(loadPlaces(data));
  },
);

export const fetchHotelAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHotel',
  async (id, {dispatch, extra: api}) => {
    dispatch(setPlaceDataLoadingStatus(true));
    const {data} = await api.get<Place>(`${APIRoute.Hotels}/${id}`);
    dispatch(getPlaceInfo(data));
    dispatch(setPlaceDataLoadingStatus(false));
  },
);
export const fetchNearPlaces = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Places>(`${APIRoute.Hotels}/${id}/nearby`);
    dispatch(getNearPlaces(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    dispatch(setReviewsDataLoadingStatus(true));
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(getReviews(data));
    dispatch(setReviewsDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loginUser(data));
  },
);

export const commentAction = createAsyncThunk<void, {id: string; comment: Comment}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/comment',
  async ({id, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, comment);
    dispatch(setReviewsDataLoadingStatus(true));
    dispatch(getReviews(data));
    dispatch(setReviewsDataLoadingStatus(false));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
