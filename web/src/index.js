import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pictures from "./Components/Pictures";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import navLogo from "./images/add.png";

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <div className="navLogoDiv">
          <Link className="hoverGeneral" to="/">
            <img src={navLogo} alt="main logo" className="navLogo" />
          </Link>
        </div>
        <div className="navLinksDiv">
          <Link className="navLinkText hoverGeneral" to="/">
            home.
          </Link>
          <Link className="navLinkText hoverGeneral" to="/sanjuan">
            san juan.
          </Link>
          <Link className="navLinkText hoverGeneral" to="/marchiquita">
            mar chiquita.
          </Link>
        </div>
      </nav>
      <Switch>
        {/* <Route path="/sanjuan">
          <Pictures />
        </Route>
        
        <Route path="/marchiquita">
          <Pictures locationId="Mar Chiquita_18.473694_-66.484861" />
        </Route> */}
        <Route
          path="/sanjuan"
          component={(props) => (
            <Pictures {...props} locationId="San Juan_18.471851_-66.125041" />
          )}
        />{" "}
        <Route
          path="/marchiquita"
          component={(props) => (
            <Pictures
              {...props}
              locationId="Mar Chiquita_18.473694_-66.484861"
            />
          )}
        />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

/*
        - no comments in router allowed
        - below creates several nested divs that store the links for componenets.
        - a Link tag is like the html anchor tags
        - home. and san juan. are components that are created through the <Link> tag
        - "<Link to = "/""> is creating a link with the ending URL being whatever <Link to = is follow by
        - in this case "home." is displayed and is enclosed by the <Link> tag that redirects to the URL ending with "/", as created by the "tp = "/""
        - when san juan. is clicked, the URL ends with "/pictures" since the Link tag redirects through to = "/pictures" to that page (component)
        -  the <Switch> tag returns only one first matching. 
        - without the Switch tag, the Route tags would render inclusively and render all routes.
        - inside the Switch tag are paths to "/pictures" and "/" which are what was created earlier in the Link tags
        - this basically makes a word for word connection
        - Inside the Route, components Pictures and Home remain. 
        - Basically what's happening here is that the Route component redirects a path to the desired page (component)
        - click san juan. -> LInk tag redirects to "/pictures" and the 
          Route tag takes the user to the path of "/pictures" which is the Pictures component.
          same goes for home. componnent
      */
