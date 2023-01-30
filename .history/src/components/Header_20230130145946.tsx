//import './App.css'
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Box  color="#F7FAFC" bg="#6b46c1" pt="90px" pb="198px">
      <Heading fontWeight={800} fontSize={"48px"}>
        Simple price for your business
      </Heading>
      <Text fontWeight={500} fontSize={"24px"} mt>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}

