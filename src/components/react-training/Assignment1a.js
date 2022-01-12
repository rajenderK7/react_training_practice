import { useState } from "react";
import "./Assignment1a.css";
import batman from "../images/batman.png";
import ironman from "../images/ironman.png";

const Assignment1a = () => {
  const [displayImage, setDisplayImgae] = useState(true);

  const title = "Styles to JSX";
  const titleMessage = "-- Header title style is given by Bootstrap and CSS--";
  const imageLink =
    "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-dsc/events/1_ilC2Aqp5sZd1wi0CopD1Hw_zT8WoJh.png";

  const changeFlutterHandler = () => {
    setDisplayImgae(!displayImage);
  };

  return (
    <div className="container mx-auto my-2">
      <h1 className="text-danger title fw-bold">{title}</h1>
      {/* The below JSX styles is given by CSS */}
      <p className="text-secondary">{titleMessage}</p>
      <div>
        <p className="style">This styles are given by CSS</p>
      </div>
      <div>
        {displayImage ? (
          <img
            className="flutter-image border border-info rounded shadow"
            src={imageLink}
            style={{ height: "200px", width: "200px" }}
            alt="Flutter logo loading.."
          />
        ) : (
          <h2>Display Flutter Logo..</h2>
        )}
      </div>
      <div>
        <button
          className="btn btn-info my-4"
          type="button"
          onClick={changeFlutterHandler}
        >
          {`Display ${displayImage ? "Text" : "Flutter Logo"}`}
        </button>
      </div>
      <div>
        <div className="container">
          <img
            style={{
              height: "200px",
              width: "200px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            className="col-6-lg col-6-md col-12-sm"
            src={batman}
            alt="batman"
          ></img>
          <img
            style={{
              height: "270px",
              width: "270px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            className="col-6-lg col-6-md col-12-sm"
            src={ironman}
            alt="ironman"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Assignment1a;
