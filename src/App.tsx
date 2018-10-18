import * as React from 'react';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';

import { ReposPage } from './pages/repos';
import { SearchPage } from './pages/search';
import { GlobalStore } from './stores';

import './App.css';
import Typography from '@material-ui/core/Typography/Typography';

const browserHistory = createBrowserHistory();
const routing = new RouterStore();
const appStore = new GlobalStore();

const store = { routing, appStore };
const history = syncHistoryWithStore(browserHistory, routing);

(window as any).store = store;

class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <Router history={history}>
          <div className="App">
            <div className="App-header">
              <div className="App-logo">
                <img src="https://www.dynamicyield.com/wp-content/uploads/2014/12/DY-Logo.png" />
              </div>
              <Typography variant="h5" component="h3">
                Web Developer Exam
              </Typography>
            </div>
            <Route exact path="/" component={SearchPage} />
            <Route path="/user/:id" component={ReposPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
