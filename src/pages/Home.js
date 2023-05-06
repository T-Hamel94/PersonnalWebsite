import '../styles/Home.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Container>
        <h1>
          <code>
            <span className="class">Console</span>
            <span className="punctuation">.</span>
            <span className="method">WriteLine</span>
            <span className="punctuation">(</span>
            <span className="string">"Hello World!"</span>
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