import React from "react";
import "./style/App.css";
import About from "./component/About/About";
import Blog from "./component/Blog/BlogPage";
import Home from "./component/Home/Home";
import Contacts from "./component/Contact/Cantact";
import NotFound from "./component/NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav/nav";
import Post from "./component/Blog/components/Post";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
  }
`;

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/Blog" component={Blog} />
              <Route path="/contact" component={Contacts} />
              <Route path="/:id" component={Post} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default React.memo(App);
