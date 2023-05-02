import '../styles/Home.css'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div id="home">
        <Container>
        <h1>
            <code>
                <span class="class">Console</span><span class="punctuation">.</span><span class="method">WriteLine</span><span class="punctuation">(</span><span class="string">"Hello World!"</span><span class="punctuation">);</span>
            </code>
        </h1>
          <p><b>Welcome to my personnal website! My name is Tristan and I have been passionate about tech for as long as I can remember. On this site, you will find informations about me, blog posts and contacts informations. Feel free to look around and stay alert because there may be more then meets the eye on this website ;)</b></p>
        </Container>
        </div>
    );
  };
  
  export default Home;