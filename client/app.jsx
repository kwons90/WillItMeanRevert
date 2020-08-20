import React from 'react';
import {
    HashRouter, Route, Switch, Redirect,
  } from 'react-router-dom';
  import {
    homePage
  } from './components/index';

  const App = () => (
    <div>
      <HashRouter>
        {/* <div>
          <Route render={(props) => <Nav props={props} />} />
        </div> */}
        <div className="container">
          <Switch>
            <Route path="/" component={homePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
  
  export default App;
  