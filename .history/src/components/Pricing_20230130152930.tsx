//import './App.css'
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

export function Pricing() {
  return (
    <Box>
      <Flex>
        <Box>
            <Text>Premium Pro</Text>
            <Heading>$329</Heading>
            <Text>builed just once</Text>
            <Button>Get Started</Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
