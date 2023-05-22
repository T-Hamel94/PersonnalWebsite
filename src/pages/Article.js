import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://localhost:7057/api/blogposts/id/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.log('There was an error:' + error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className='row article'>
      <div className='col-12 text-center'>
        <h2 className='mt-3'>{article.title}</h2>
        <h3 className='mt-3'>{article.author}</h3>
        <h5 className='mt-3'>{new Date(article.createdDate).toDateString()}</h5>
        <p className='mt-4'>{article.content}</p>
      </div>
    </div>
  );
}

export default Article;