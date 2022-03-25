import {
  Button,
  Center,
  Box,
  BoxProps,
  Text,
  useDisclosure,
  Slide,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MessageSquare } from "react-feather";
import { motion } from "framer-motion";

function Home() {
  const backgroundColor = useColorModeValue("blue.800", "yellow.300");
  const textColor = useColorModeValue("white", "black");
  const linkColor = useColorModeValue("yellow.300", "blue.800");

  const { isOpen, onToggle } = useDisclosure();
  const MotionBox = motion<BoxProps>(Box);
  const animationBox = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Center flexDirection={"column"} mt={200}>
      <Box mb={10}>
        <Box display={"grid"} gridTemplateColumns={"0.5fr 2fr"}>
          <MessageSquare />
          <Text>English Lesson</Text>
        </Box>
        <Text textAlign={"center"}>Pronunciation learning</Text>
      </Box>
      <>
        <Button
          whiteSpace={"initial"}
          onClick={onToggle}
          bg={backgroundColor}
          color={textColor}
        >
          Click to learn new word
        </Button>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <MotionBox
            variants={animationBox}
            initial="hidden"
            animate="visible"
            p={5}
            color="black"
            bg={backgroundColor}
            rounded="xl"
            shadow="xl"
            display={"flex"}
            flexDirection={"row"}
          >
            <Link to={"/pronunciation"}>
              <Text color={linkColor} mr={0.5}>
                Generate new English word.
              </Text>
            </Link>
            <Text>Let's learn together!</Text>
          </MotionBox>
        </Slide>
      </>
    </Center>
  );
}

export default Home;
