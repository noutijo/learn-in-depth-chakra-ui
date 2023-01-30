//import './App.css'
import { Box, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
      <Box>
        <Heading fontWeight={800} fontSize={"48px"} color="#">Simple price for your business</Heading>
        <Text>Plans that are carefully crafted to suit your business.</Text>
      </Box>
  );
}

