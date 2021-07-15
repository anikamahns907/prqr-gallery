import React from "react";
import "./App.css";
import Pictures from "./Components/Pictures";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      //nani <Router> ?
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
          - same goes for the home. component - 
      */
      <Router>
        <div>
          <div className="topBar">
            <div className="buttonHolder">
              <div className="sideBarButtons hover">
                <Link to="/">home.</Link>
              </div>
              <div className="sideBarButtons hover">
                <Link to="/pictures">san juan.</Link>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/pictures">
              <Pictures />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

//look for other APIs
//

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <code>coming soon!</code>
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://www.youtube.com/watch?v=g8sX6wZHhD0&ab_channel=MacMiller"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           good tunes
//         </a> */}
//         <iframe width="560" height="315" title = "mac" src="https://www.youtube.com/embed/g8sX6wZHhD0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       </header>
//     </div>
//   );
// }
