import reactDom from 'react-dom';
import React from 'react';
import Login from './components/Login';
import Sign_up from './components/Sign-up';
import Error from './components/error';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <header className="App-header">
        <Switch>

          <Route path="/login" component={Login} />
          <Route path="/sign" component={Sign_up} />
          <Route component={Error} />
        </Switch>
      </header>
    </div>
  );
}




export default App;
