import { UserContext } from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';

export function useAdminCheck() {
  const { user } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    if (user && user.isAdmin != undefined) {
        if(user && user.isAdmin === true){
            setIsAdmin(true);
        }
        else if (user && !user.isAdmin){
            setIsAdmin(false);
        }
      }
    }, [user]);

  return isAdmin;
}