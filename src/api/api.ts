import axios from "../httpClient"

function getEnglishWord() {
    return axios.get(`/`);
}

const exports = {
    getEnglishWord
};
export default exports;