import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
      textEditor: () => {
          dispatch()
      }
      }
  };

class Editor extends Component {
    state = {
        content: ""
    }
    onChange = (e) => {
        this.setState({content: e.target.value});
    }
    render(){
        return(
            <div>
                 Editor
                
                <textarea id="editor" value={this.state.content} onChange={this.onChange}></textarea>
                
                
            </div>
        );
    }
}


export default Editor;