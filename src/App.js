import React from 'react';
import {Switch,Route} from "react-router-dom";
import Login from './Login';
import Main from './Main';
import Menu from './Menu';
import Profile from './Profile';



const App = () => {
  return (
    <>
      <Menu />
        <Switch>
            <Route exact path =" /" component={Main}/>
            <Route exact path =" /login" component={Login }/>
            <Route exact path =" /profile" component={Profile}/>
        </Switch>
        
    </>
  )
 

}

export default App;
