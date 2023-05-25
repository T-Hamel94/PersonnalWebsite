import React, { useState } from 'react';
import Header from './static/header/Header'
import Footer from './static/footer/Footer';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import CreateArticle from './pages/CreateArticle';
import Register from './pages/Register';
import Article from './pages/Article';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles/App.css';

const AnimatedRoutes = ({ onLogin }) => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={500}
      >
        <Routes key={location.key} location={location}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login onLogin={onLogin} />} />
          <Route path="createarticle" element={<CreateArticle />} />
          <Route path="register" element={<Register />} />
          <Route path="myprofile" element={<Profile />} />
          <Route path="article/:id" element= {<Article />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

function App() {
  const [username, setUsername] = useState(null);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header username={username} setUsername={setUsername} />
        <Container fluid className="p-0">
          <Row className="h-100 w-100 m-0 p-0">
            <Col className="d-flex flex-column m-0 p-0">
              <AnimatedRoutes onLogin={setUsername} />
            </Col>
          </Row>
        </Container>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
