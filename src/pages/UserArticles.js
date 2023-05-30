import axios from 'axios';
import UserArticlePreview from '../components/UserArticlePreview';
import ConfirmationModal from '../components/ConfirmationModal';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDeleteArticle } from '../utils/useDeleteArticle';
import { useTranslation } from 'react-i18next';

function UserArticles() {
  const { t } = useTranslation('article');
  const [articles, setArticles] = React.useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const deleteArticle = useDeleteArticle();
  const { username } = useParams();

  const handleDeleteArticle = () => {
    if (articleToDelete) {
      deleteArticle(articleToDelete.blogPostID);
      setArticles(articles.filter(article => article.blogPostID !== articleToDelete.blogPostID));
      setShowConfirmation(false);
    }
  }

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://localhost:7057/api/blogposts/username/${username}`);
        setArticles(response.data);
      } catch (error) {
        console.log('There was an error:' + error);
      }
    };

    fetchArticles();
  }, [username]); 

  return (
    <div id ="userArticleContainer"> 

      <div className="row m-0 ">
        <div className="col-12 text-center p-0">
            <h1 className="page-header">{`${t('usersarticles_articlesby')}${username}`}</h1>
        </div>
      </div>

      <div className="container" id="articleContainer">
      {articles && articles.map(article => (
        <div className='row' key={article.blogPostID}>
          <div className='col-11'>
            <Link to={`/article/${article.blogPostID}`} className='articlePreviewLink' >
              <UserArticlePreview
                title={article.title}
                author={article.author}
                date={new Date(article.createdDate).toDateString()}
                content={article.content}
              />
            </Link>
          </div>
          <div className='col-1 delete-article' onClick={() => {
              setArticleToDelete(article);
              setShowConfirmation(true);
          }}>
              <p>{t('article_delete')}</p>
          </div>
        </div>
      ))}
      </div>

      <ConfirmationModal
          show={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          onConfirm={handleDeleteArticle}
          message={t('usersarticles_deleteconfirmation')}
          action={t('usersarticles_delete')}
        />

    </div>
  );
}

export default UserArticles;
