import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './app.css';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import Header from '../header/Header';

const App = ()=> {
    return(
        <main role="main" className="container">
            <Header numItems={5} total={125} />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cart" exact component={CartPage} />
            </Switch>
        </main>
    );
};

export default App;