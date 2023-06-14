import axios from 'axios';

export function useFetchArticles() {
  const fetchArticles = useCallback(async () => {       
        const response = await axios.get(`https://localhost:7057/api/blogposts`);   
        if (response.status === 200 && response.data) {
            return response.data;
        }
  });

  return fetchArticles;
}
