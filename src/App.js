import React from 'react';
import NavBar from './static/NavBar';
import Footer from './static/Footer';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles/App.css';

const AnimatedRoutes = () => {
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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Container fluid className="main-content p-0">
          <Row className="h-100 w-100 m-0 p-0">
            <Col className="d-flex flex-column m-0 p-0">
              <AnimatedRoutes />
            </Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
