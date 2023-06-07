import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import CompanyIntroduction from './components/CompanyIntroduction/CompanyIntroduction';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
            <CompanyInfo />
             <Footer />
      </div>
    </BrowserRouter>
  );
}


function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
    </>
  );
}

export default App;
