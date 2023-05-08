import React from "react";
import "./Pictures.css";
import FirstImg from "../../pictures/img1.jpg";
import SecondImg from "../../pictures/img2.jpg";
import ThirdImg from "../../pictures/img3.jpg";
import FourthImg from "../../pictures/img4.jpg";
import FifthImg from "../../pictures/img5.jpg";
import SixthImg from "../../pictures/img6.jpeg";

const Pictures = () => {
  return (
    <div className="container">
      <img className="picture__nature" src={FirstImg} alt="nature"></img>
      <img className="picture__nature" src={SecondImg} alt="nature"></img>
      <img className="picture__nature" src={ThirdImg} alt="nature"></img>
      <img className="picture__nature" src={FourthImg} alt="nature"></img>
      <img className="picture__nature" src={FifthImg} alt="nature"></img>
      <img className="picture__nature" src={SixthImg} alt="nature"></img>
    </div>
  );
};

export default Pictures;
