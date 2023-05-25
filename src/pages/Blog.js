import '../styles/pages/Blog.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Article from '../components/ArticlePreview';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useTranslation('blog');
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://localhost:7057/api/blogposts');
        setArticles(response.data);
      }
      catch (error) {
        console.log('There was an error:' + error);
      }
    };
  
    fetchArticles();
  }, []);

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
                  <Article
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