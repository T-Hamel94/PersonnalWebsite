import '../styles/pages/Home.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div id="home">
      <Container>
        <div className="row">
          <h1 className="col-12">
            <code>
              <span className="class">Console</span>
              <span className="punctuation">.</span>
              <span className="method">WriteLine</span>
              <span className="punctuation">(</span>
              <span className="string">{t('hello_world')}</span>
              <span className="punctuation">);</span>
            </code>
          </h1>
        </div>
        <div className="row">
          <p className="col-12">
            <b className='text-white'>{t('welcome_message')}</b>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
