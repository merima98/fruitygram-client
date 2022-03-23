import { combineReducers } from "redux";
import { reducerWord } from "./words";

const rootReducer = combineReducers({
    reducerWord: reducerWord,
});

export default rootReducer;
