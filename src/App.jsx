import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import "./style.css";
import { Provider } from "react-redux";
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
