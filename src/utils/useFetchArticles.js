import axios from 'axios';

export function useFetchArticles() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchArticles = useCallback(async () => {       
        const response = await axios.get(`${apiUrl}/blogposts`);   
        if (response.status === 200 && response.data) {
            return response.data;
        }
  });

  return fetchArticles;
}
