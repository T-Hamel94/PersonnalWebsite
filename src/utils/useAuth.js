import { UserContext } from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useFetchUserData } from '../utils/useFetchUserData';

export function useAuth() {
  const fetchUserData = useFetchUserData();
  const { user } = useContext(UserContext);
  const authToken = localStorage.getItem('authToken');

  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    if (authToken) {
      fetchUserData().then(() => {
        setIsAuth(user !== null && user !== undefined && user?.username);
      });
    } else {
      setIsAuth(false);
    }
  }, [authToken]);

  return isAuth;
}