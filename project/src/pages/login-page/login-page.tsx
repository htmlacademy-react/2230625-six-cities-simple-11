import {FormEvent, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {AuthData} from "../../types/auth-data";
import {loginAction} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from "../../const";

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

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
              <span>Paris</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
