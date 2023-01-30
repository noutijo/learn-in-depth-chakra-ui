//import './App.css'
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

export function Pricing() {
  return (
    <Box>
      <Flex>
        <Box>
            <Text fontSize="24px" fontWeight="800">Premium Pro</Text>
            <Heading as="h3" fontWeifontSize="800">$329</Heading>
            <Text>builed just once</Text>
            <Button>Get Started</Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
