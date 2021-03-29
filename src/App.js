import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Home } from './Components/home';
import NavBar from './Components/navbar';
import Register from './Components/register';
import Login from './Components/login'
import NotFoundPage from './Components/404';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path = "/" component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
