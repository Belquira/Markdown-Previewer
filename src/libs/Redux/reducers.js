import { EDIT_TEXT } from "./actions";
import { editorDefaultText } from "../Redux/state";

const initialState = {
    text: editorDefaultText
}

const defaultReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_TEXT:
        return {text: action.text};

        default: 
        return state;
    }
}

export default defaultReducer;