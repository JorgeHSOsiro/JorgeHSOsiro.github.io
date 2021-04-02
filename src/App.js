import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './page/Landing';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/main" component={ Landing } />
      </Switch>
    </div>
  );
}

export default App;
