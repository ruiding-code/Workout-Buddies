import React from "react";
import Login from "./component/Login";
import NavBar from "./component/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/home' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
    </Switch>
    </div>
  );
}

export default App;
