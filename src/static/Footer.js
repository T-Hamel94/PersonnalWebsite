import '../styles/Footer.css';

const Footer = () => {
    return (
      <div id="footer">
          <div id='social'>
            <ul>
                <li>
                  <a href='http://www.github.com' target="_blank">
                    <img src={process.env.PUBLIC_URL + '/logo/github-mark.png'} alt="GitHub Logo"></img>
                  </a>
                </li>
                <li>
                  <a href='http://www.linkedin.com' target="_blank">
                    <img src={process.env.PUBLIC_URL + '/logo/LI-In-Bug.png'} alt="LinkedIn Logo"></img>
                  </a>
                </li>

            </ul>
          </div>
      </div>
    );
  };
  
  export default Footer;