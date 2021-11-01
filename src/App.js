import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import BoxMain from './components/BoxMain/BoxMain';
import AppBar from './components/AppBar/AppBar';

import Loader from 'react-loader-spinner';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return !isFetchingCurrentUser ? (
    <BoxMain>
      <AppBar />
      <Switch>
        <Suspense
          fallback={
            <Loader
              type="Rings"
              color="#00BFFF"
              height={50}
              width={50}
              position="center"
            />
          }
        >
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </BoxMain>
  ) : null;
};

export default App;
