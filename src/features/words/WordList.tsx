import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEnglishWord } from "../../actions/words";

function WordList() {
  const word = useSelector((state: { reducerWord: any }) => ({
    word: state.reducerWord.word,
  }));
  const englishWord = word.word;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnglishWord());
  }, [dispatch]);

  return <div>{englishWord[0]?.word}</div>;
}

export default WordList;
