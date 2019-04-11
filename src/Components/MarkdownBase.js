import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { editText } from "../libs/Redux/actions";
import { connect } from "react-redux";
import marked from "marked";
import "../css/App.css";

const mapStateToProps = state => {
  return {
    text: state.text
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateText: content => dispatch(editText(content))
  };
};

const markedOptions = {
  gfm: true,
  breaks: true,
  sanitize: true,
  tables: true
};

const createMarkup = text => {
  const markedText = marked(text, markedOptions);
  return { __html: markedText };
};

const MarkdownBase = ({ text, updateText }) => {
  return (
    <div className="grid-container">
      <div className="grid-item-editor">
        <Editor text={ text } updateText={ updateText } />
      </div>
      <div className="grid-item-info">
        <h1>hola soy el holandes volador</h1>
      </div>
      <div className="grid-item-preview">
        <Preview text={ text } markedText={ createMarkup(text) } />
      </div>
    </div>
  );
};

const MarkdownPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkdownBase);

export default MarkdownPage;
