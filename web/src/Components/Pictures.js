import React from "react";
import axios from "axios";
//the page
class Pictures extends React.Component {
  state = {
    popupActive: false,
    caption: "",
    image: "",
    locationId: this.props.locationId,
    content: [],
  };

  componentDidMount() {
    var self = this;
    axios
      .get(
        "https://vesl6is7lb.execute-api.us-east-2.amazonaws.com/default/prqr?locationId=" +
          this.state.locationId
      )
      .then(function (response) {
        var temp = [];
        var imageData = response.data.resources;
        for (var i = 0; i < imageData.length; i++) {
          temp.push(imageData[i].secure_url);
        }
        console.log(temp);
        self.setState({ content: temp });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  uploadImage(image) {
    const data = new FormData();
    var time = +new Date();
    console.log(time);
    data.append("file", image);
    data.append("upload_preset", "uploadforprqr");
    data.append("folder", "prqr/" + this.state.locationId);
    data.append("cloud_name", "prqr-cloud");
    data.append("public_id", this.state.caption + "_" + time.toString());
    fetch(" https://api.cloudinary.com/v1_1/prqr-cloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then(() => {
        this.setState({ popupActive: false });
      })
      .catch((err) => console.log(err));
  }

  captionHandling(event) {
    this.setState({ caption: event.target.value });
  }

  render() {
    return (
      <div className="mainDiv">
        <div
          className="popupMain centerVertical"
          style={{
            opacity: this.state.popupActive ? 1 : 0,
            visibility: this.state.popupActive ? "visible" : "hidden",
          }}
        >
          <div className="popupWhiteSquare">
            <div className="xDiv">
              <span
                onClick={() => this.setState({ popupActive: false })}
                className="hoverGeneral xText"
              >
                X
              </span>
            </div>
            <div className="popupContent">
              <input
                type="file"
                onChange={(e) => this.setState({ image: e.target.files[0] })}
              ></input>
              <h6>Write a ONE word caption that resembles this photo.</h6>
              <label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  onChange={(event) => this.captionHandling(event)}
                />
              </label>
              <button onClick={() => this.uploadImage(this.state.image)}>
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="mainMarginDiv">
          <div className="generalRow distributeRowBetween">
            <div className="coordinateDiv">
              <p>{this.state.locationId.split("_")[0]}</p>
              <p>
                {this.state.locationId.split("_")[1] +
                  "°N " +
                  this.state.locationId.split("_")[2] +
                  "°W"}
              </p>
              <p>Last Updated: 09/21/2020</p>
            </div>
            <div className="descriptionDiv">
              <i>
                prqr allows users across Puerto Rico to portray their snapshots
                at specific locations.
              </i>
            </div>
            <div className="uploadButtonDiv centerVertical">
              <button onClick={() => this.setState({ popupActive: true })}>
                Add Image!
              </button>
            </div>
          </div>

          <div className="mainPictures">
            {this.state.content.map((picture, i) => {
              return (
                <div className="imageDiv" key={i}>
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                      src={picture}
                      alt={picture
                        .split("/")
                        .pop()
                        .split("_")[0]
                        .replace("%20", " ")}
                      className="img"
                    />
                    <span>
                      {picture
                        .split("/")
                        .pop()
                        .split("_")[0]
                        .replace("%20", " ")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Pictures;
