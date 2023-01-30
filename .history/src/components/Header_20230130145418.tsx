//import './App.css'
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify="center" align="center" direction={"column"}>
      <Heading fontWeight={800} fontSize={"48px"} color="#F7FAFC">
        Simple price for your business
      </Heading>
      <Text fontWeight={500} fontSize={"48px"} color="#F7FAFC">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Flex>
  );
}

