import { useContext, useCallback } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../contexts/UserContext';

export function useFetchUserData() {
  const { user, setUser } = useContext(UserContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchUserData = useCallback(async () => {
    const authToken = localStorage.getItem('authToken');
    if ((user?.username == null || user?.username == undefined) && authToken) {
      const decodedToken = jwt_decode(authToken);
      const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
            
      const response = await axios.get(`${apiUrl}/Users/userID/${userId}`);
      
      if (response.status === 200 && response.data) {
        setUser(response.data);
        return response.data;
      }
    }
  }, [setUser]);

  return fetchUserData;
}
