import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './app.css';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

const App = ()=> {
    return(
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart" exact component={CartPage} />
        </Switch>
    );
};

export default App;