import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="logo">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
