import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';

import UserList from './components/UsersList';
import Products from './components/Products';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
//import SideCategories from './components/SideCategories';


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
                <Route path="/products/detail/:id" exact={true} component={ProductDetail}></Route>
                <Route path="/:categoryId" exact={true} component={Products}></Route>
                <Route path="/categories" exact={true} component={Categories}></Route>
                <Route path="/" exact={true} component={Products}></Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
