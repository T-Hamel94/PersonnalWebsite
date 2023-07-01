import '../styles/pages/Article.css'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);
  const { t } = useTranslation('article');
  const apiUrl = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogposts/id/${id}`);
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
          <div className='mt-3 mb-3 text-center justify-text' id='articleContent'>
            <ReactMarkdown children={article.content} className='justify-text' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Article;