import React from 'react';
import AccountLayout from './layout/AccountLayout/AccountLayout';
import AppLayout from './layout/AppLayout/AppLayout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ProductedRoute } from './components/common/ProductedRoute/ProductedRoute';

// import "./App.css";

function App() {
  console.log('run app');
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/users/auth" component={AccountLayout} />
          <ProductedRoute path="/" component={AppLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
