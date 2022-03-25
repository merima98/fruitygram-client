import { combineReducers } from "redux";
import { reducerWord } from "./wordReducer";

const rootReducer = combineReducers({
    reducerWord: reducerWord,
});

export default rootReducer;
