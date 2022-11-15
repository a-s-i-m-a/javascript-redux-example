import { useState } from 'react';
import { appLocalStorage } from '@utils/storage';

export function useProvideAuth() {
  const [user] = useState({
    isLogged: appLocalStorage.getItem('isLogged'),
  });
  return {
    user,
  };
}
