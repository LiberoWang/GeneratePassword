import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter,  Switch } from 'react-router-dom';
import CreatePassword from './CreatePassword';
import Content from './Content';
import BusinessCard from './BusinessCard';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const Home = () => {
  return(
    <HashRouter>
      <Switch>
        <Route exact path='/' component={CreatePassword} />
        <Route path='/business-card' component={BusinessCard} />
        <Route path='/content' component={Content} />
      </Switch>
    </HashRouter>
  )
};

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
