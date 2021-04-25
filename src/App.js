import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './page/About';
import Landing from './page/Landing';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="main">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
