import '../styles/pages/Home.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div id="home">
      <Container>
        <h1>
          <code>
            <span className="class">Console</span>
            <span className="punctuation">.</span>
            <span className="method">WriteLine</span>
            <span className="punctuation">(</span>
            <span className="string">{t('hello_world')}</span>
            <span className="punctuation">);</span>
          </code>
        </h1>
        <p>
          <b>{t('welcome_message')}</b>
        </p>
      </Container>
    </div>
  );
};

export default Home;