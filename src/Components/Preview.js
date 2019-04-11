import React from "react";

const Preview = ({ markedText }) => {
  return <div id="preview" dangerouslySetInnerHTML={ markedText } />;
};

export default Preview;
