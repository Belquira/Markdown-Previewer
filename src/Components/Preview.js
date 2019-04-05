import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        textPreview: state.text
    }
}
const Preview = ({ textPreview }) => {
    return (
        <div>
            Preview
                <p>{ textPreview }</p>
        </div>
    );
}

const ConnectedComponent = connect(mapStateToProps, null)(Preview);

export default ConnectedComponent;