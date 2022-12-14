import {FormEvent, useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, useNavigate} from 'react-router-dom';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus, locationList} from '../../const';
import {changeLocation} from '../../store/actions';

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const locationName = locationList[Math.floor(Math.random() * (locationList.length))];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  useEffect(() => {
    dispatch(changeLocation(locationName));
  });

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };


  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                ref={loginRef}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to={AppRoute.Main} className="locations__item-link" >
              <span>{locationName}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
