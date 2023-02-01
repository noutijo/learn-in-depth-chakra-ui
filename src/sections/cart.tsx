import { VStack,HStack, Heading, Image, Button, Text, SimpleGrid, Flex, useColorMode, useColorModeValue, Divider } from "@chakra-ui/react"

export default function Cart() {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
  const scondaryTextColor = useColorModeValue("gray.600", "gray.400")
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text size="2xl">
          If the price is too hard on your eyes,
          <Button
            onClick={toggleColorMode}
            variant="link"
            colorScheme={"black"}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <SimpleGrid columns={1} rowGap={8} w="full">
        <Flex justify={"space-between"} alignItems="center" w="full">
          <HStack spacing={2}>
            <Image src="/logo.png" boxSize={"30px"} objectFit="cover" />
            <VStack spacing={0.5}>
              <Text fontWeight={"bold"}>NOOUTIDEV LOGO</Text>
              <Text color={scondaryTextColor}>_PKM0397221882Z</Text>
            </VStack>
          </HStack>
          <Text fontWeight={"bold"}>$119.00</Text>
        </Flex>
        <Flex justify={"space-between"} alignItems="center">
          <Text color={scondaryTextColor}>Subtotal</Text>
          <Text fontWeight={"bold"}>$119.00</Text>
        </Flex>
        <Flex justify={"space-between"} alignItems="center">
          <Text color={scondaryTextColor}>Shipping</Text>
          <Text fontWeight={"bold"}>$19.99</Text>
        </Flex>
        <Flex justify={"space-between"} alignItems="center">
          <Text color={scondaryTextColor}>Taxes(estimated)</Text>
          <Text fontWeight={"bold"}>$23.80</Text>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex justify={"space-between"} alignItems="center">
          <Text color={scondaryTextColor}>Total</Text>
          <Text fontWeight={"bold"} fontSize={["24", "24", "32"]}>
            $162.79
          </Text>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
}