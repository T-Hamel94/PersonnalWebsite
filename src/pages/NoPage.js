import '../styles/pages/NoPage.css'

const NoPage = () => {
    return (
      <div className='noPageContainer'>
        <div className='container text-center' id='noPageContent'>
          <h1 className=''>Error: 404</h1>
          <h2 className=''>Woopsie daisy, looks like you got lost -_-</h2>
          <h5><b><a href='/'>Click Here to return to the home page :)</a></b></h5>
        </div>
      </div>
    )
};
  
export default NoPage;
