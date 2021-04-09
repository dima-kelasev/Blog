
import './style/App.css';
import About from './component/About/About';
import Blog from './component/Blog/BlogPage';
import Home from './component/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div className='page'>
      <nav className='nav_bar'>
        <ul className='header'>
          <li >
            <Link className='header_link' to="/">Home</Link>
          </li>
          <li>
            <Link className='header_link' to="/about">About</Link>
          </li>
          <li>
            <Link className='header_link' to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}


