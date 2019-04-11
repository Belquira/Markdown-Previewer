import React from "react";

const Editor = ({ text, updateText }) => {
  const onChange = e => {
    updateText(e.target.value);
  };

  return <textarea id="editor" value={text} onChange={onChange} />;
};

export default Editor;
