import React from "react";
import "../../App.css";
import "./Gallery.css";
import SmallProjects from "../SmallProjects";

function Gallery() {
  return (
    <div id="galleryContent">
      <div id="galleryTitleContainer">
        <h1 id="galleryTitle">Projects Gallery</h1>
      </div>
      <p id="gallerySubtitle">
        The Projects Gallery is meant to showcase all my smaller projects that
        aren't massivly complex but are still worthy of being part of my
        portfolio, as well as my language diversity.
      </p>
      <SmallProjects />
      <div className='galleryButtonContainer'><a id="galleryButton" href='/'>Go Home</a></div>

    </div>
  );
}

export default Gallery;
