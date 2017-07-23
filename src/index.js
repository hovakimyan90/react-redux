import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route,  browserHistory,} from 'react-router';
import app from './reducers/index.jsx';
import Login from './containers/LoginContainer.jsx';

let store = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = ({ store }) => (

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/login" >
                <Route path="/" component={Login} />
            </Route>
        </Router>
    </Provider>

);
render(<Root store={store} />, document.getElementById('root'));