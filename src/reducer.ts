import { combineReducers } from "redux"

import { reducerWord } from "./features/words/wordSlice";

const rootReducer = combineReducers({
    reducerWord: reducerWord,
});

export default rootReducer;
