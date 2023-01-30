//import './App.css'
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export function Pricing() {
  return (
    <Box as="section" color="#F7FAFC" bg="#6b46c1" pt="90px" pb="198px" px="32px">
      <Heading fontWeight={800} fontSize={"48px"}>
        Simple price for your business
      </Heading>
      <Box fontWeight={500} fontSize={"24px"} mt="16px">
        Plans that are carefully crafted to suit your business.
      </Box>
    </Box>
  );
}

