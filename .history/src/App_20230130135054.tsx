//import './App.css'
import { Box, Flex, Stack, VStack, HStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Stack spacing="space-around" align="center">
        <Box bg="pink" w="10rem" h="10rem" color="white">
          Box 1
        </Box>
        <Box bg="red" w="10rem" h="10rem" color="white">
          Box 2
        </Box>
        <Box bg="green" w="20rem" h="10rem" color="white">
          Box 3
        </Box>
        <Box bg="tomato" w="10rem" h="10rem" color="white">
          Box 4
        </Box>
      </Stack>
    </div>
  );
}

export default App;
