//import './App.css'
import { Box, Text, HStack,Stack, Icon } from "@chakra-ui/react"
import {
  BsFillStarFill,
  BsBookmarkStarFill,
  BsClockHistory,
} from "react-icons/bs";

export const Feature = (props:any)=>{
    const {icon, children, ...rest } = props
    return (
      <HStack spacing="6" {...rest}>
        <Icon as={icon} boxSize={["6","6","8"]} color="#5F3EBB" />
        <Text textAlign="left" fontSize="sm" fontWeight="bold">
          {children}
        </Text>
      </HStack>
    );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="32px" pb="8">
      <Stack px="12" spacing="5" direction={["column", "column", "row"]}>
        <Feature icon={BsFillStarFill}>30 days money back Guarantee</Feature>
        <Feature icon={BsBookmarkStarFill}>
          No setup fees 100% hassle-free
        </Feature>
        <Feature icon={BsClockHistory}>
          No Monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
