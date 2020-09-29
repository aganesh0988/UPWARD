import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';

import UserList from './components/UsersList';


function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active">Log In</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/login" component={LoginPanel}>

                </Route>

                <Route path="/">
                    <h1>My Home Page</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
