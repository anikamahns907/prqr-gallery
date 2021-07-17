import React, { useState } from "react";
import "../picPage.css";
import buttImg from "../images/add.png";
import test1 from "../images/test1.jpg";
import test2 from "../images/test2.png";
import test3 from "../images/test3.jpg";
import test4 from "../images/test4.jpg";

const Pictures = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "uploadforprqr");
    data.append("cloud_name", "dpi2cuxnt");

    fetch("https://api.cloudinary.com/v1_1/dpi2cuxnt/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  //the page

  return (
    <div className="backPic">
      <div className="leftCornDiv">
        <p>San Juan</p>
        <p>18.4655°N 66.1057°W</p>
        <p>Last Updated: 09/21/2020</p>
      </div>
      <div className="topDiv">
        <div className="addButtDiv">
          <div>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <button onClick={uploadImage}>Upload</button>
          </div>
          <div>
            <h6>Uploaded image will be displayed here</h6>
          </div>
        </div>
      </div>
      <div className="mainPic">
        <div className="picRow">
          <div className="column">
            <div className="imgDiv">
              <img src={url} className="imgCol" alt="img" />
              <p class="imgCaption">lala.</p>
            </div>
            <div className="imgDiv">
              <img src={test2} className="imgCol" alt="img" />
              <p class="imgCaption">star.</p>
            </div>
          </div>
          <div className="column">
            <div className="imgDiv">
              <img src={test2} className="imgCol" alt="img" />
              <p class="imgCaption">star.</p>
            </div>
            <div className="imgDiv">
              <img src={test3} className="imgCol" alt="img" />
              <p class="imgCaption">planet.</p>
            </div>
          </div>
          <div className="column">
            <div className="imgDiv">
              <img src={test3} className="imgCol" alt="img" />
              <p class="imgCaption">planet.</p>
            </div>
            <div className="imgDiv">
              <img src={test4} className="imgCol" alt="img" />
              <p class="imgCaption">dimension.</p>
            </div>
          </div>
          <div className="column">
            <div className="imgDiv">
              <img src={test4} className="imgCol" alt="img" />
              <p class="imgCaption">dimension.</p>
            </div>
            <div className="imgDiv">
              <img src={test3} className="imgCol" alt="img" />
              <p class="imgCaption">planet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
