import React from 'react';
import Footer from './components/Footer';
import Landing from './page/Landing';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="main">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
