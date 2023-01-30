//import './App.css'
import "./App.css";
import { Box, Flex, Stack, VStack, HStack } from "@chakra-ui/react";
import { Header , Pricing} from "./components/Header";
import { Header , Pricing} from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Box>
        <Header />  
        <Pricing />  
      </Box>
    </div>
  );
}

