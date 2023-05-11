import '../styles/pages/Blog.css';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation('blog');

  return (
      <div id ="blogContainer">      
            <div id="headerContainer">
                <div className="row m-0 ">
                    <div className="col-12 text-center">
                        <h1 className="">{t("blog_header")}</h1>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center m-0 mb-2">
                    <div className="col-12 text-center ">
                        <p>{t("blog_description")}</p>
                    </div>
            </div>


            <div className = "container" id="articleContainer">
                <div className='row article'>
                    <div className='col-12'>
                        <h2>Article name 1</h2>
                        <span>Article date</span>
                        <p>Article First few lines... </p>
                    </div>
                </div>

                <div className='row article'>
                    <div className='col-12'>
                        <h2>Article name 2</h2>
                        <span>Article date</span>
                        <p>Article First few lines... </p>
                    </div>
                </div>
            </div>
      </div>
  );
};

export default Blog;