import React from "react";
import "./Home.css";
import logoReact from "../../icons/logo-react.png";

const Home = () => {
  return (
    <div>
      <h1 className="title">Homework 19. ReactJS. Поняття SPA. Навігація</h1>
      <div className="title-logo">
        <img className="title-logo__img" src={logoReact} alt="logo-react" />
      </div>
    </div>
  );
};

export default Home;
