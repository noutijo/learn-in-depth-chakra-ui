//import './App.css'
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex  color="#F7FAFC" justify="center" align="center" direction={"column"} bg="#6b">
      <Heading fontWeight={800} fontSize={"48px"}>
        Simple price for your business
      </Heading>
      <Text fontWeight={500} fontSize={"24px"}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Flex>
  );
}

