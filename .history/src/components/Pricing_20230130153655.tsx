//import './App.css'
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

export function Pricing() {
  return (
    <Box>
      <Flex>
        <Box>
            <Text fontSize="24px" fontWeight="800">Premium Pro</Text>
            <Heading as="h3" fontSize="60px">$329</Heading>
            <Text fontSize="24px" color="800">builed just once</Text>
            <Button>Get Started</Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
