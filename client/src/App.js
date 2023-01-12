// eslint-disable-next-line
import React, {Fragment, useEffect} from 'react';
import Landing from './pages/Landing';
import Information from './pages/Information';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Error from './pages/Error';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
// eslint-disable-next-line
import {loadUser} from './actions/auth';
import setAuthToken from './utilities/setAuthToken';
// eslint-disable-next-line
import PrivateRoute from './routing/PrivateRoute';
import Temples from './temples/Temples';
import Temple from './temple/Temple';
import BucketList from './pages/BucketList';
import VisitedList from './pages/VisitedList';
import TempleSuggestion from './pages/AddTemple';
import Deities from './pages/Deities';
import Locations from './pages/Locations';
import Vishnu from './pages/Vishnu';
import Shiva from './pages/Shiva';
import India from './pages/India';
import Nepal from './pages/Nepal';
import SriLanka from './pages/SriLanka';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/information" component={Information} />
              <PrivateRoute path="/temples" component={Temples} />
              <PrivateRoute path="/temple/:id" component={Temple} />
              <PrivateRoute path="/bucketlist" component={BucketList} />
              <PrivateRoute path="/visitedlist" component={VisitedList} />
              <PrivateRoute path="/deities" component={Deities} />
              <PrivateRoute path="/locations" component={Locations} />
              <PrivateRoute path="/vishnu" component={Vishnu} />
              <PrivateRoute path="/shiva" component={Shiva} />
              <PrivateRoute path="/india" component={India} />
              <PrivateRoute path="/nepal" component={Nepal} />
              <PrivateRoute path="/srilanka" component={SriLanka} />
              <PrivateRoute path="/templesuggestions" component={TempleSuggestion} />
              <Route component={Error} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
  );
}

export default App;
