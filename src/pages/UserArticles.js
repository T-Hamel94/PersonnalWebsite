import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Article from '../components/ArticlePreview';

function UserArticles() {
  const [articles, setArticles] = React.useState(null);

  const { username } = useParams(); // Accessing username from URL params

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
  }, [username]); // Add username as a dependency so that the effect runs again when username changes

  return (
    <div id ="userArticleContainer"> 

      <div className="row m-0 ">
        <div className="col-12 text-center p-0">
            <h1 className="page-header">{`${username}'s Articles`}</h1>
        </div>
      </div>

      <div className="row justify-content-center m-0 mb-2">
        <div className="col-12 text-center">
            <p>List of articles by {username}.</p>
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
}

export default UserArticles;
