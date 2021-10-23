import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="logo">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
