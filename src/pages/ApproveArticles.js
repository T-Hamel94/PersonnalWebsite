import '../styles/pages/Blog.css';
import React from 'react';
import axios from 'axios';
import ArticlePreview from '../components/ArticlePreview';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';

const ApproveArticles = () => {
  const { t } = useTranslation('approveArticles');
  const [articles, setArticles] = React.useState(null);
  const isAuth = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(isAuth === false){
        navigate('/');
      }

    const fetchUnapprovedArticles = async () => {
      try {
        const response = await axios.get('https://localhost:7057/api/blogposts/unapproved');
        setArticles(response.data);
      }
      catch (error) {
        console.log('There was an error:' + error);
      }
    };
  
    fetchUnapprovedArticles();
  }, []);

  return (
      <div id ="blogContainer"> 

            <div className="row m-0 ">
              <div className="col-12 text-center p-0">
                  <h1 className="page-header">Approve Articles</h1>
              </div>
            </div>

            <div className="row justify-content-center m-0 mb-2">
              <div className="col-12 text-center">
                  <p>Approve here</p>
              </div>
            </div>

            <div className="container" id="articleContainer">
              {articles && articles.map(article => (
                <Link to={`/article/${article.blogPostID}`} key={article.blogPostID} className='articlePreviewLink' >
                  <ArticlePreview
                    title={article.title}
                    author={article.author}
                    date={new Date(article.createdDate).toDateString()}
                    content={article.content}
                  />
                </Link>
              ))}
            </div>

      </div>
  );
};

export default ApproveArticles;