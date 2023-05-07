import '../styles/pages/Blog.css';

const Blog = () => {
  return (
      <div id ="blogContainer">      
            <div id="headerContainer">
                <div className="row m-0 ">
                    <div className="col-12 text-center">
                        <h1 className="mt-3">Blog</h1>
                    </div>
                </div>
                <div className="row justify-content-center m-0">
                    <div className="col-12 text-center ">
                        <p>This is where I write about interesting technologies and general thoughts</p>
                    </div>
                </div>
            </div>


            <div className = "container" id="articleContainer">
                <div className='row article'>
                    <div className='col-12'>
                        <h2>Article name 1</h2>
                        <span>Article date</span>
                        <p>Article First few lines: </p>
                    </div>
                </div>

                <div className='row article'>
                    <div className='col-12'>
                        <h2>Article name 2</h2>
                        <span>Article date</span>
                        <p>Article First few lines: </p>
                    </div>
                </div>
            </div>
      </div>
  );
};

export default Blog;