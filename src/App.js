import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="appWrap">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
