// index page

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,  Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
// import Landing from "views/examples/Landing.js";
// import Login from "views/examples/Login.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
import Landing from "views/IndexSections/Hero.js";
import Profile from "views/IndexSections/AboutMe.js";
import Projects from "views/IndexSections/ProjectCarousel";

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch> */}
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/projects"
        exact
        render={(props) => <Projects {...props} />}
      />
      <Redirect to="/" />
    {/* </Switch> */}
  </BrowserRouter>,
  document.getElementById("root")
);
