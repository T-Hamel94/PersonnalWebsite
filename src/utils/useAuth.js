import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

export function useAuth() {
    const { user } = useContext(UserContext);
    return user != null || user != undefined;
  }