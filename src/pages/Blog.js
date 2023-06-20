import '../styles/pages/Blog.css';
import React from 'react';
import axios from 'axios';
import ArticlePreview from '../components/ArticlePreview';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RotatingLines } from 'react-loader-spinner';

const Blog = () => {
  const { t } = useTranslation('blog');
  const [articles, setArticles] = React.useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogposts`);
        setArticles(response.data);
      }
      catch (error) {
        console.log('There was an error:' + error);
      }
    };
  
    fetchArticles();
  }, []);

  if (!articles) {
    return (
      <>
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
      </>
    );
  }

  return (
      <div id ="blogContainer"> 

            <div className="row m-0 ">
              <div className="col-12 text-center p-0">
                  <h1 className="page-header">{t("blog_header")}</h1>
              </div>
            </div>

            <div className="row justify-content-center m-0 mb-2">
              <div className="col-12 text-center">
                  <p>{t("blog_description")}</p>
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

export default Blog;