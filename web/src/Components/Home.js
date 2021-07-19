import React from "react"; //imports react

class Home extends React.Component {
  render() {
    return (
      //created a center div for introduction
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <h1 className="intro">
            PRQR <br></br> capture and share.
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
