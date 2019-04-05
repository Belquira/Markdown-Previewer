import { EDIT_TEXT } from "./actions";

const initialState = {
    text: "Hello World"
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