//import './App.css'
import { Box, Heading, Text, Flex, Button, HStack,Stack, Icon } from "@chakra-ui/react"
import { BsCheckCircleFill } from "react-icons/bs"

export const ListItem = (props:any)=>{
    const {children, ...rest } = props
    return (
      <HStack as="li" spacing="20px" {...rest}>
        <Icon as={BsCheckCircleFill}  w="22px" h="22px" color="#5F3EBB"/>
        <Text>{children}</Text>
      </HStack>
    );
}

export function Pricing() {
  return (
    <Box maxW="994px" m="auto" mt="-256" borderRadius="12px" overflow="hidden" boxShadow="lg">
      <Flex bg="white">
        <Box bg="#f0eafb" p="60px">
          <Text fontSize="24px" fontWeight="800">
            Premium Pro
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text fontSize="18px" fontWeight="500" color="#171923" mt="8px">
            builed just once
          </Text>
          <Button
            bg="#5F3EBB"
            color="white"
            size={"lg"}
            w="282px"
            mt="24px"
            _hover={{ backgrounColor: "#5F3EBB", color: "#F7FAFC" }}>
            Get Started
          </Button>
        </Box>

        <Box p="60px" fontSize="18px">
          <Text
            textAlign={"left"}
            fontSize="18px"
            fontWeight="500"
            color="#171923"
            mt="8px">
            Acces these features when you get this pricing package busineess.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
