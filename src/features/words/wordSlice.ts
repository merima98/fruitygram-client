import { GET_ENGLISH_WORD } from "../../constants/actionTypes";

const initialState = {
    word: {},
};
export const reducerWord = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case GET_ENGLISH_WORD:
            return { ...state, word: payload };
        default:
            return state;
    }
};
