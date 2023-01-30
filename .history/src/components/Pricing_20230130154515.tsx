//import './App.css'
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

export function Pricing() {
  return (
    <Box>
      <Flex>
        <Box bg="#f0eafb" p="60px">
            <Text fontSize="24px" fontWeight="800">Premium Pro</Text>
            <Heading as="h3" fontSize="60px" mt="16px">$329</Heading>
            <Text fontSize="18px" fontWeight="500" color="#171923" mt="8px">builed just once</Text>
            <Button colorScheme="#120E19" size={"lg"} w="282px" mt="24px">Get Started</Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
