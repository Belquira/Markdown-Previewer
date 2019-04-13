import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { editText } from "../libs/Redux/actions";
import { connect } from "react-redux";
import marked from "marked";
import "../css/Markdown.css";

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
    <div className="parent">
      <div className="container">
        <div className="preview-item">
          <Preview markedText={createMarkup(text)} />
        </div>
        <div className="editor-item">
          <Editor text={text} updateText={updateText} />
        </div>
      </div>
      <div className="gh-item">
        <h4>
          by{" "}
          <a href="https://github.com/Belquira">
            belquira <i className="fab fa-github-alt" />
          </a>
        </h4>
      </div>
    </div>
  );
};

const MarkdownPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkdownBase);

export default MarkdownPage;
