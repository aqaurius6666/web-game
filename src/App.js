import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Home } from './Components/home';
import NavBar from './Components/navbar';
import Register from './Components/register';
import Login from './Components/login'
export const BASE_URL = 'https://our-web-game.herokuapp.com'
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
