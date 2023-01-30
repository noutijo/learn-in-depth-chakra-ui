import { useState } from 'react'
import './App.css'
import {Box} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box bg="pink" w="10rem" h="10rem" color:white> Box bro</Box>
    </div>
  )
}

export default App
