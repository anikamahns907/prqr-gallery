import React from 'react';
import './App.css';
import Pictures from "./Components/Pictures";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
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
              {/* <div className = "barButtons">
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/picture">Picture</Lsink>
                </div>
              </div> */}
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

