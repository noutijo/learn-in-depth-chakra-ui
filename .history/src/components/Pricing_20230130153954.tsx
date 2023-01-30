//import './App.css'
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

export function Pricing() {
  return (
    <Box>
      <Flex>
        <Box>
            <Text fontSize="24px" fontWeight="800">Premium Pro</Text>
            <Heading as="h3" fontSize="60px" mt="16px">$329</Heading>
            <Text fontSize="18px" fontWeight="500" color="#171923" mt="8px">builed just once</Text>
            <Button colorScheme="purple" size={""}>Get Started</Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
