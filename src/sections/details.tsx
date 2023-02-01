import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react"

export default function Details() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })
  const scondaryBgColor = useColorModeValue("gray.100", "gray.700")
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text size="2xl">
          If you already have an account, click here to log on.
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input bg={scondaryBgColor} placeholder="Oreol" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input bg={scondaryBgColor} placeholder="Tech Lover" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input bg={scondaryBgColor} placeholder="yde_cm" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input bg={scondaryBgColor} placeholder="yde" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select bg={scondaryBgColor}>
              <option value={"cm"}>Camroon</option>
              <option value={"usa"}>United States of America</option>
              <option value={"uae"}>United Arab Emirates</option>
              <option value={"nmk"}>North Macedonia</option>
              <option value={"de"}>Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox defaultChecked>Ship to billing address.</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button variant="primary" size="lg" w="full">
              Place Order
            </Button>
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}