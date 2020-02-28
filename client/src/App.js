import React from 'react';
import {Route} from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import Register from './components/register';
import Login from './components/login';
import UsersList from './components/usersList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Authentication Sprint</h1>
      <Route exact path='/' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute exact path='/users' component={UsersList}/>
    </div>
  );
}

export default App;
