import axios from 'axios';
import { useCallback } from 'react';

export function useFetchArticlesToApprove() {
    const token = localStorage.getItem('authToken');
    const apiUrl = process.env.REACT_APP_API_URL;
    
    const fetchArticlesToApprove = useCallback(async () => {       
        const response = await axios.get(`${apiUrl}/blogposts/unapproved`, {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        });
        if (response.status === 200 && response.data) {
            return response.data;
        }
        else{
            console.log('There has been an error while fetching the article to approve')
        }
    });

  return fetchArticlesToApprove;
}
