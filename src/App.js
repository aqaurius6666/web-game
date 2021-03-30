import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react'
import { Switch, Route} from 'react-router-dom'
import NavBar from './Components/navbar';
import Register from './Components/register';
import Login from './Components/login'
import NotFoundPage from './Components/404';
import User from './Components/user';
import EditProfile from './Components/edit-profile';


import authenticationService from './API/authenticationService';
import GameContent from './Components/game-content';
import BrowserGame from './Components/browser-game';

function App() {
  const [account, setAccount] = useState(authenticationService.getCurrentAccountValue())
  useEffect(() => {
    authenticationService.currentAccount.subscribe((data) => {
      setAccount(JSON.parse(data))
      console.log(account)
    })
  }, [])
  return (
    <div className="body">
      <NavBar />
      <Switch>
        <Route exact path="/" component={BrowserGame} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={User} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route path="/games/:gid" component={(props) => <GameContent gid={props.match.params.gid}/>} />
        <Route path="/tags/:tag" component={(props) => <BrowserGame tag={props.match.params.tag} />} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
