import '../styles/Blog.css';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
      <div id="blog">
          <Container>
              <div className="row">
                  <div className="col-12 text-center">
                      <h1 className="mt-3">Blog</h1>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-12 text-center">
                      <p>This is where I write about interesting technologies and general thoughts</p>
                  </div>
              </div>
          </Container>
      </div>
  );
};

  
  export default Blog;