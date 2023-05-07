import '../styles/pages/Home.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div id="home">
      <Container>
        <div class="row">
          <h1 class="col-12">
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
        <div class="row">
          <p class="col-12">
            <b>{t('welcome_message')}</b>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;