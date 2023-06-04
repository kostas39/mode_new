import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import CompanyIntroduction from './components/CompanyIntroduction/CompanyIntroduction';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CompanyIntroduction />
      <Footer />
    </div>
  );
}

export default App;
