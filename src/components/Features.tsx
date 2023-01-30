//import './App.css'
import { Box, Text, HStack, Icon } from "@chakra-ui/react"
import {
  BsFillStarFill,
  BsBookmarkStarFill,
  BsClockHistory,
} from "react-icons/bs";

export const Feature = (props:any)=>{
    const {icon, children, ...rest } = props
    return (
      <HStack spacing="24px" {...rest}>
        <Icon as={icon} boxSize="28px" color="#5F3EBB" />
        <Text textAlign="left" fontSize="14px" fontWeight="700">
          {children}
        </Text>
      </HStack>
    );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="32px" pb="32px">
      <HStack px="48px" spacing="18px">
        <Feature icon={BsFillStarFill}>30 days money back Guarantee</Feature>
        <Feature icon={BsBookmarkStarFill}>
          No setup fees 100% hassle-free
        </Feature>
        <Feature icon={BsClockHistory}>
          No Monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
