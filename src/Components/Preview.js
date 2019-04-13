import React from "react";
import "../css/Preview.css";

const Preview = ({ markedText }) => {
  return <div id="preview" dangerouslySetInnerHTML={ markedText } />;
};

export default Preview;
