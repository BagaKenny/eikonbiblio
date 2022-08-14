import React from "react";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import "./project.css";

// Assets

// Font Awesome

const Project = (props) => {
  // Pour aller à la prochaine page

  return (
    <main className="book-project-container">
      <div className="project-content">
        <div className="item-project-1">
          <h1 className="artist-title"> {props.title}</h1>
          <p className="item-text"> {props.textContent} </p>
          <div className="aparthé">
            <p style={{ fontSize: "2rem" }}>{props.editor}</p>
            <p>{props.edition}</p>
            <p>Format : {props.format}</p>
          </div>
        </div>
        <div className="item-project-3 project-video">
          <YoutubeEmbed embedId={props.video} alt="" />
        </div>
        <div className="item-project-4">
          <img src={props.img1} alt="Marvel" />
        </div>
        <div className="item-project-5">
          {" "}
          <img src={props.img2} alt="" />
        </div>
        <div className="item-project-6">
          {" "}
          <img src={props.img3} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Project;
