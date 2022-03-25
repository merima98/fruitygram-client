import {
  Center,
  Box,
  Text,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MessageSquare } from "react-feather";

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

  function generateNewEnglishWord() {
    dispatch(getEnglishWord());
  }

  const backgroundColor = useColorModeValue("blue.800", "yellow.300");
  const textColor = useColorModeValue("white", "black");

  return (
    <Center mt={60} flexDirection={"column"}>
      <Box mb={4}>
        <MessageSquare height={60} width={60} />
      </Box>
      <Flex mb={15}>
        <Box textAlign={"center"}>
          <Box mb={5}>
            <Text textTransform={"uppercase"} fontSize={25}>
              {englishWord[0]?.word}
            </Text>
          </Box>
          <Box mb={5}>
            <Text fontWeight={"bold"} fontSize={15}>
              Meaning
            </Text>
            <Text>{englishWord[0]?.definition}</Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={15}>
              Pronunciation
            </Text>
            <Text>{englishWord[0]?.pronunciation}</Text>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Button
          whiteSpace={"initial"}
          bg={backgroundColor}
          color={textColor}
          onClick={() => generateNewEnglishWord()}
        >
          Generate new word
        </Button>
      </Box>
    </Center>
  );
}

export default WordList;
