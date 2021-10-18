import kclogo from './assets/kclogo.png';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
    <div className="logo">
      <img src={kclogo} />
    </div>
      <Footer />
    </div>
  );
}

export default App;
