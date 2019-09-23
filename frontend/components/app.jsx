import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import BottleIndexPage from './bottle_index'

const App = () => (
    <div>


        <div className="container">
            <Switch>
                <Route exact path='/' component={BottleIndexPage} />
                {/* <Route exact path='/products/:productId' component={ProductShowContainer} /> */}


            </Switch>

        </div>

    </div>
);

export default App;
