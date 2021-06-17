import React from "react"; //imports react
import "../picPage.css"; //imports picPage.css
import buttImg from "../images/add.png";
import test1 from "../images/test1.jpg";

import test2 from "../images/test2.png";
import test3 from "../images/test3.jpg";
import test4 from "../images/test4.jpg";


//the page
class Pictures extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        addAPicPopup: 0,
    };
}


    addAPicture() {

    }
    render() {
        return (
            <div className="backPic">
                 <div className="leftCornDiv">
                        <p>San Juan</p>
                        <p>18.4655°N 66.1057°W</p>
                        <p>Last Updated: 09/21/2020</p>
                 </div>
                    {/* <div className="backButtonDiv">
                        <p  className="backButton">home.</p>
                    </div> */}
                <div className="topDiv">
                    <div className="addButtDiv">
                    {/* onClick = {()=> addAPicture()} */}
                        <img src={buttImg}  className="addButt" alt="addButt" />
                        <p>add image.</p>
                        <form></form>
                    </div>
                    
        
                </div>
                
                <div className="mainPic">
                    <div className="picRow">
                        <div className="column">
                            <div className="imgDiv">
                                <img src={test1} className="imgCol" alt="img" />
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



            </div>);
    }
}

export default Pictures;