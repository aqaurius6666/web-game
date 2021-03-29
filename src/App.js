import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Home } from './Components/home';
import NavBar from './Components/navbar';
import Register from './Components/register';
import Login from './Components/login'
import NotFoundPage from './Components/404';
import TableGame from './Components/table-game';
import User from './Components/user';
import EditProfile from './Components/edit-profile';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={User} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route path="/tags/:tag" component={(props) => <TableGame tag={props.match.params.tag}/>} />
        <Route path = "/" component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
