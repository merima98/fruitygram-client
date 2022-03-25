import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/header/Header";
import Word from "./features/words/Word";
import Home from "./features/home/Home";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pronunciation" element={<Word />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
