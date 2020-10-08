import React, { Component } from "react";
import "./MajorProjectTemplate.css";

export default class MajorProjectTemplate extends Component {
  render() {
    return (
      <div id="MPTContainer">
        {/* {this.props.namee} */}
        <img src="https://picsum.photos/200/300" />
        <div id="MPTTextContainer">
          <h1 id='MPTTitle'>Cascade</h1>
          <p id='MPTInfo'>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <button id='MPTButton'>click me</button>
        </div>
      </div>
    );
  }
}
