import React from 'react';
import NavBar from './static/NavBar';
import Footer from './static/Footer';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import './styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Container fluid className="main-content">
          <Row className="h-100 w-100">
            <Col className="d-flex flex-column">
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
