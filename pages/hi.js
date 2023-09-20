import React from 'react'
import { Tabss } from './components/Tabss'
import { ChakraBaseProvider } from '@chakra-ui/react'
const hi = () => {
  return (
    <ChakraBaseProvider>
    <div><Tabss /></div>
    </ChakraBaseProvider>
  )
}

export default hi