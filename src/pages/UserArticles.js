import axios from 'axios';
import '../styles/pages/UserArticles.css';
import UserArticlePreview from '../components/UserArticlePreview';
import ConfirmationModal from '../components/ConfirmationModal';
import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { useDeleteArticle } from '../utils/useDeleteArticle';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../utils/useAuth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'

function UserArticles() {
  const isAuth = useAuth();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { t } = useTranslation('article');
  const apiUrl = process.env.REACT_APP_API_URL;
  const [articles, setArticles] = React.useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const deleteArticle = useDeleteArticle();

  const handleDeleteArticle = () => {
    if (articleToDelete) {
      deleteArticle(articleToDelete.blogPostID);
      setArticles(articles.filter(article => article.blogPostID !== articleToDelete.blogPostID));
      setShowConfirmation(false);
    }
  }

  React.useEffect(() => {
    if(isAuth === false){
      navigate('/');
    }
    const fetchArticlesByUsername = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogposts/username/${user?.username ?? 'userNotFound'}`);
        setArticles(response.data);
      } catch (error) {
        console.log('There was an error:' + error);
      }
    };

    fetchArticlesByUsername();
  }, [user, isAuth]); 

  return (
    <div id ="userArticleContainer"> 

      <div className="row m-0 ">
        <div className="col-12 text-center p-0">
            <h1 className='page-header funky-header'>{`${t('usersarticles_articlesby')}${user?.username ?? 'userNotFound'}`}</h1>
        </div>
      </div>

      <div className="container" id="articleContainer">
        {articles && articles.length > 0 ? (
          articles.map(article => (
            <div className='row' key={article.blogPostID}>
              <div className='col-lg-11 col-sm-12'>
                <Link to={`/article/${article.blogPostID}`} className='articlePreviewLink' >
                  <UserArticlePreview
                    title={article.title}
                    author={article.author}
                    date={new Date(article.createdDate).toDateString()}
                    content={article.content}
                    isApproved={article.isApproved}
                  />
                </Link>
              </div>
              <div className='col-lg-1 col-sm-12 delete-article' onClick={() => {
                  setArticleToDelete(article);
                  setShowConfirmation(true);
              }}>
                <p id="deleteMessage">{t('article_delete')}</p>
              </div>
            </div> ))
        ):(
          <div className='row'>
            <h4 className='col-12 text-center mt-4'>{t('usersarticles_notfound')}{user?.username ?? 'userNotFound'} :(</h4>  
            <Link to={`/createarticle/${user?.username ?? 'userNotFound'}`} className='text-center'><button className='text-center mt-4 btn btn-info p-2'>{t('usersarticles_newarticle')}</button></Link>
          </div>
        )}
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