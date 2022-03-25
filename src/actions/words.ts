import * as api from "../api/api";
import { GET_ENGLISH_WORD } from "../constants/actionTypes";

export const getEnglishWord = () => async (dispatch: any) => {
    try {
        const { data } = await api.default.getEnglishWord();
        dispatch({ type: GET_ENGLISH_WORD, payload: data });
    } catch (error) {
        console.log(error);
    }
}; 