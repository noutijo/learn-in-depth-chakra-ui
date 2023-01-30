import "./App.css"
import { Box } from "@chakra-ui/react"
import { Header  } from "./components/Header"
import { Pricing } from "./components/Pricing"
import { Features } from "./components/Features"

export default function App() {
  return (
    <div className="App">
      <Box>
        <Header />  
        <Pricing />  
        <Features />  
      </Box>
    </div>
  )
}

