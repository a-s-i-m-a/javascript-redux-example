import HomeView from './HomeView';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { appSessionStorage } from '@utils/storage';
import { useProvideAuth } from '@navigation/Auth/useProvideAuth';
import { MAIN } from '@navigation/CONSTANTS';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function HomeContainer() {
  const query = useQuery();
  const auth = useProvideAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth.user.isLogged) {
      history.push(MAIN);
    }
    appSessionStorage.setItem('token', query.get('token'));
  }, [query]);

  return <HomeView token={query.get('token')} />;
}
