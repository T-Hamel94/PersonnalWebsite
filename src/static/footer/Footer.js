import '../../styles/static/Footer.css';

const Footer = () => {
    return (
      <div id="footer">
          <div id='social'>
            <ul>
                <li>
                  <a href='https://github.com/T-Hamel94' target="_blank">
                    <img src={process.env.PUBLIC_URL + '/logo/github-mark.png'} alt="GitHub Logo"></img>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/tristan-hamel-qcca' target="_blank">
                    <img src={process.env.PUBLIC_URL + '/logo/LI-In-Bug.png'} alt="LinkedIn Logo"></img>
                  </a>
                </li>

            </ul>
          </div>
      </div>
    );
  };
  
  export default Footer;