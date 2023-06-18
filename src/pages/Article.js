import '../styles/pages/Article.css'
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);
  const { t } = useTranslation('article');

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
    return (
      <div className='row'> 
        <div className='col d-flex justify-content-center align-items-center py-5'>
          <RotatingLines
            strokeColor="grey"
            animationDuration="1.1"
            strokeWidth="3"
            height={100}
            width={100}
            timeout={3000} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className='container'>

      <div className='row m-0' id='articleContainer'>
        <div className='row'>
          <h1 className>{article.title}</h1>
          <div className='col-6' id='articleTitle'>
            <p><b>{t('article_author')} </b> {article.author}</p>
          </div>
          <div className='col-6' id='articleDate'>
            <p>{new Date(article.createdDate).toDateString()}</p>
          </div>
        </div>
        <div className='row'>
          <p className='mt-3 text-center' id='articleContent'>{article.content}</p>
        </div>
      </div>

    </div>
  );
}

export default Article;