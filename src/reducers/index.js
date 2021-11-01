import { combineReducers } from "redux";

import rotate from "./rotateReducer";


const rootReducer = combineReducers({
    rotate,
});

export default rootReducer;