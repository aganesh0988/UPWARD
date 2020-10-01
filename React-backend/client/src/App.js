import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';

import UserList from './components/UsersList';
import Products from './components/Products';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';


function App() {

    return (
        <BrowserRouter>
            <Navigation />
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
