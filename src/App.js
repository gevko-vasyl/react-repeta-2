import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import Authors from './views/Authors';
import Books from './views/Books';
import NotFound from './views/NotFound';
import BookDetailsView from './views/BookDetailsView';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Books
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={Authors} />
        <Route exact path="/books" component={Books} />
        <Route path="/books/:bookId" component={BookDetailsView} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
