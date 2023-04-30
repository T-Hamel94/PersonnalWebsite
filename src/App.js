import React from 'react';
import NavBar from './static/NavBar';
import Footer from './static/Footer';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';

function App() {
  return (

    <div className="App Wrapper">

        <BrowserRouter>

        <NavBar />

          <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About/>} />
              <Route path="blogs" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>

          <Footer />

        </BrowserRouter>

    </div>
  );
}

export default App;
