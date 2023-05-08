import React from "react";
import "./Publications.css";
import avatarImage from "../../img/avatar.jpg";
import logoOfficial from "../../img/logo.png";
import mainPicture from "../../img/star-wars-women.jpg";
import comentsImg from "../../img/comments.png";
import shareImg from "../../img/share.png";
import likesImg from "../../img/likes.png";
import downloadImg from "../../img/download.png";

const Publications = () => {
  return (
    <div className="card">
      <div className="card__info">
        <img className="card__info-avatar" src={avatarImage} alt="avatar"></img>
        <p className="card__info-autor">Anakin Skywalker</p>
        <img className="card__info-logo" src={logoOfficial} alt="logo"></img>
        <p className="card__info-data">@dart_vader 26 лют.</p>
      </div>
      <div className="card__main">
        <p className="card__main-text">
          WTF? Who is Ray? Why she is Skywalker? Luke...?
        </p>
        <img
          className="card__main-img"
          src={mainPicture}
          alt="main-image"
        ></img>
      </div>
      <div className="card__reactions">
        <div className="card__reactions coments">
          <img
            className="coments-img"
            src={comentsImg}
            alt="logo-coments"
          ></img>
          <div className="coments-text">482</div>
        </div>
        <div className="card__reactions share">
          <img className="share-img" src={shareImg} alt="logo-share"></img>
          <div className="share-text">146</div>
        </div>
        <div className="card__reactions likes">
          <img className="likes-img" src={likesImg} alt="logo-likes"></img>
          <div className="likes-text">887</div>
        </div>
        <div className="card__reactions download">
          <img
            className="download-img"
            src={downloadImg}
            alt="logo-download"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Publications;
