import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MessageSquare, Sun, Moon } from "react-feather";

function Header() {
  const backgroundColor = useColorModeValue("white", "gray.700");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent={"space-between"}
      bg={backgroundColor}
      position={"fixed"}
      top={0}
      width={"100%"}
      p={3}
    >
      <Box display={"grid"} gridTemplateColumns={"1fr 2fr"} mr={15}>
        <MessageSquare cursor="pointer" />
        English lesson
      </Box>
      <Box>
        {colorMode === "light" ? (
          <Sun onClick={toggleColorMode} cursor="pointer" />
        ) : (
          <Moon onClick={toggleColorMode} cursor="pointer" />
        )}
      </Box>
    </Flex>
  );
}

export default Header;
