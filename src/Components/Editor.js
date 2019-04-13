import React from "react";
import "../css/Editor.css";

const Editor = ({ text, updateText }) => {
  const onChange = e => {
    updateText(e.target.value);
  };

  return (
    <div>
      <textarea id="editor" value={text} onChange={onChange} />
    </div>
  );
};

export default Editor;
