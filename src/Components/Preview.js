import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";

const mapStateToProps = (state) => {
    return {
        textPreview: state.text
    }
}


class Preview extends Component {

    markedPreview = () => {
        let markedOptions = {
            gfm: true
          }
        let content = this.props.textPreview;
        let markedText = marked(content, markedOptions);
        document.getElementById("preview").innerHTML = markedText;
    }
    
    componentDidMount() {
        this.markedPreview();
    }

    componentDidUpdate() {
        this.markedPreview();
    }

    render() {
    
        return (
            <div id="preview"></div>
        );
    }

} 


const ConnectedComponent = connect(mapStateToProps, null)(Preview);

export default ConnectedComponent;