import '../styles/pages/Blog.css';
import '../styles/pages/ApproveArticles.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import { useAdminCheck } from '../utils/useAdminCheck';
import ArticlePreview from '../components/ArticlePreview';
import { useFetchArticlesToApprove } from '../utils/useFetchArticlesToApprove';
import { useApproveArticle } from '../utils/useApproveArticle';
import ConfirmationModal from '../components/ConfirmationModal';

const ApproveArticles = () => {
  const { t } = useTranslation('article');
  const isAuth = useAuth();
  const isAdmin = useAdminCheck();
  const approveArticle = useApproveArticle()
  const navigate = useNavigate();
  const fetchUnapprovedArticles = useCallback(useFetchArticlesToApprove());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [articleToApprove, setArticleToApprove] = useState(null);
  const [articles, setArticles] = useState(null);

  const handleApproveArticle = () => {
    if (articleToApprove) {
      approveArticle(articleToApprove.blogPostID);
      setArticles(articles.filter(a => a.blogPostID !== articleToApprove.blogPostID));
      setShowConfirmation(false);
    }
  }

  useEffect(() => {
    if(isAuth === false){
      navigate('/');
    }
    if (isAdmin === false){
      navigate('/myprofile');
    }
  
    const fetchAndSetArticles = async () => {
      const articles = await fetchUnapprovedArticles();
      setArticles(articles);
    }

    fetchAndSetArticles();
  }, [isAuth, isAdmin]);

  if(isAdmin === null) {
    return <div>Loading...</div> 
  }

  return (
      <div id ="blogContainer"> 

            <div className="row m-0 ">
              <div className="col-12 text-center p-0">
                  <h1 className="page-header">{t('approvearticle_header')}</h1>
              </div>
            </div>

            <div className="row justify-content-center m-0 mb-2">
              <div className="col-12 text-center">
                  <p>{t('approvearticle_subheader')}</p>
              </div>
            </div>

            <div className="container" id="articleContainer">
              {articles && articles.length > 0 ? (
                articles.map(article => (
                  <div className='row' key={article.blogPostID}>
                    <div className='col-lg-11 col-sm-12'>
                      <Link to={`/article/${article.blogPostID}`} className='articlePreviewLink' >
                        <ArticlePreview
                          title={article.title}
                          author={article.author}
                          date={new Date(article.createdDate).toDateString()}
                          content={article.content}
                        />
                      </Link>
                    </div>
                    <div className='col-lg-1 col-sm-12 approve-article' onClick={async () => {
                        setArticleToApprove(article);
                        setShowConfirmation(true);
                    }}>
                      <p>{t('approvearticle_approve')}</p>
                    </div>
                  </div> ))
              ):(
                <div className='row'>
                  <h4 className='col-12 text-center mt-4'>{"Aucun article"} :(</h4>  
                </div>
              )}
            </div>

          <ConfirmationModal
            show={showConfirmation}
            onHide={() => setShowConfirmation(false)}
            onConfirm={handleApproveArticle}
            message={t('approvearticle_confirmation')}
            action={t('approvearticle_approve')}
          />

      </div>
  );
};

export default ApproveArticles;