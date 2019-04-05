import React, { Component } from "react";
import { connect } from "react-redux";
import { editText } from "../Redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
      updateText: (content) => dispatch(editText(content))
      }
  };


class Editor extends Component {
    
    state = {
        content: ""
    }

    onChange = (e) => {
        this.setState({content: e.target.value});
        this.props.updateText(e.target.value);
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

const ConnectedComponent = connect(null, mapDispatchToProps)(Editor);

export default ConnectedComponent;