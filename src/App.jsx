import Header from './components/Layout/Header';
import About from './pages/About';
import Catalogue from './pages/Catalogue';
import ExtraServices from './pages/ExtraServices';
import Features from './pages/Features';
import Features2 from './pages/Features2';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Parcour from './pages/Parcour';
import Plans from './pages/Plans';
import Pub from './pages/Pub';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="max-w-7xl m-auto min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Parcour />
        <Offers />
        <Features />
        <Features2 />
        <Plans />
        <Catalogue />
        <ExtraServices />
        <Pub />
      </main>
      <Footer />
    </div>
  );
}

export default App;
