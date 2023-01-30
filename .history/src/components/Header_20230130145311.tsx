//import './App.css'
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export function Header() {
  return (
      <Flex justify="center" align="colunm" direction={""}>
        <Heading fontWeight={800} fontSize={"48px"} color="#F7FAFC">Simple price for your business</Heading>
        <Text>Plans that are carefully crafted to suit your business.</Text>
      </Flex>
  );
}

