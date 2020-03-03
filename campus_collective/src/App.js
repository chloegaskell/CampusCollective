import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './components/User_Login/User_Login';
import SignUp from './components/create_account/create_account';
import Help from './components/Help/Help';
import Home from './components/dashboard/Dashboard';



import './App.css';



class App extends Component {

  render() {
    return (
    <Router>
        <div className="App-intro">
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Help" component={Help}/>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/Home" component={Home}/>
        </div>
     </Router>
    );
  }
}
export default App;
