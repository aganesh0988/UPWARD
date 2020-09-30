import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';

import UserList from './components/UsersList';
import Products from './components/Products';
import SignUp from './components/SignUp';


function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active">Log In</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path="/login" component={LoginPanel}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route path="/" component={Products}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
