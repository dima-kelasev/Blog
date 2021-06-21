import React  from 'react';
import './style/App.css';
import About from './component/About/About';
import Blog from './component/Blog/BlogPage';
import Home from './component/Home/Home';
import Conacts from './component/Contact/Cantact'
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './component/Nav/nav';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Post from "./component/Blog/components/Post";

 function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/Blog" component={Blog}/>
              <Route path="/contact" component={Conacts}/>
              <Route path='/:id' component={Post}/>
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  export default React.memo(App);