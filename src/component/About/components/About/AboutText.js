import * as React from "react";
import "../../about.css";
import avatar from "../../../../images/avatar.png";
import TextSkil from "./TextSkil";

const AboutText = () => {
  return (
    <main className="content__intro">
      <div className="content__text__block">
        <div className="imgBack"></div>
        <img className="avatar" src={avatar} alt="" />
        <h1>Dmitriy Kelasev </h1>
        <p className="info__subtitle">Web developer</p>

        <p className="content__introduce">
          Hi, my name is Dmitriy and this my blog.
          <br />
          I'm a web developer with over two years of professional background in
          the field of front-end development. The primary technology stack is
          React.js/Redux. I prefer React.js as the most modern and useful
          technology that is suitable for almost every project. It provides high
          quality along with a quick development process.
        </p>
        <p className="content__introduce">Here is my technology skills:</p>
        <TextSkil />
      </div>
    </main>
  );
};

export default React.memo(AboutText);
