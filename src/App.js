import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './page/Landing';

import './App.css';
import Header from './components/Header';
import Projects from './page/Projects';

function App() {
  return (
    <div className="main">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
