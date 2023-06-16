import axios from 'axios';
import { useCallback } from 'react';

export function useFetchArticlesToApprove() {
    const token = localStorage.getItem('authToken');
    const fetchArticlesToApprove = useCallback(async () => {       
        const response = await axios.get(`https://localhost:7057/api/blogposts/unapproved`, {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        });
        if (response.status === 200 && response.data) {
            return response.data;
        }
        else{

        }
    });

  return fetchArticlesToApprove;
}
