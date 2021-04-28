import React, { Component } from 'react';
import './style/App.css';
import About from './component/About/About';
import Blog from './component/Blog/BlogPage';
import Home from './component/Home/Home';
import Conacts from './component/Contact/Cantact'
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

 function App() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
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
                <li>
                  <Link className='header_link' to="/contact">Contacts</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/Blog" component={Blog}/>
              <Route path="/contact" component={Conacts}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  export default App;