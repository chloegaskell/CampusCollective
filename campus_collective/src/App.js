import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './components/User_Login/User_Login';
import SignUp from './components/create_account/create_account';
import Help from './components/Help/Help';
import Home from './components/dashboard/Dashboard';
import ItemDetails from './components/Item_Details/ItemDetails';
import ItemEdit from './components/Item_Edit/ItemEdit';
import Search from './components/Search/Search';
import AccountEdit from './components/Account_Edit/edit_account';
import AccountDetails from './components/myProfile/profile';


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
            <Route path="/ItemDetails" component={ItemDetails}/>
            <Route path="/ItemEdit" component={ItemEdit}/>
            <Route path="/Search" component={Search}/>
            <Route path="/AccountEdit" component={AccountEdit}/>
            <Route path="/AccountDetails" component={AccountDetails}/>
        </div>
     </Router>
    );
  }
}
export default App;
