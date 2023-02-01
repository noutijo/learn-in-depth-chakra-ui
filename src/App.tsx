import { Container, Flex } from "@chakra-ui/react"
import Details from "./sections/details"
import Cart from "./sections/cart"

export default function App() {
  return (
      <Container maxW={"container.xl"} p={0}>
        <Flex h={{base:"auto", md:"auto"}} py={[0, 10, 20]} direction={{base:"column-reverse", md:"row", lg:"row"}}>
         <Details />
         <Cart />
        </Flex>
      </Container>
  )
}