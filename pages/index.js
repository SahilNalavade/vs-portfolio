import React, { useState } from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Tabss } from './components/Tabss'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image,Box,Flex,Text,TabIndicator } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button,HStack
} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure ,Input
} from '@chakra-ui/react'
export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };

  return (
    <>
      <ChakraProvider >
       <Box bg={'#101010'} color={'#FFF'} overflow={'hidden'} >
       <HStack spacing='24px'>

       <Menu>
  <MenuButton>
  <Image src='./vsicon.png' alt='Dan Abramov' ml='20px' style={{ maxWidth: '25px' }}/>
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'} ml='10px' p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

       <Menu>
  <MenuButton>
    File
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Edit
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Selection
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    View
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Go
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Run
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton ref={btnRef} colorScheme='teal' onClick={onOpen}>
    Terminal
  </MenuButton>

</Menu>

<Menu>
  <MenuButton>
    WIndow
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Help
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
</HStack>
       </Box>
      <Flex bg={"#1f1f1f"} >
        <Tabs orientation="vertical" h={'100vh'}>
          <TabList bg="#131313" h={'100vh'} borderLeft={'1px #151515 solid'} borderRight={'1px #676767 solid'}>
            <flex> 
            <Tab
              height={'55px'}
              onClick={() => handleTabClick(0)}
              isActive={activeTab === 0}
            >
              <Image src='./file.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            <Tab
            height={'55px'}
              onClick={() => handleTabClick(1)}
              isActive={activeTab === 1}
            >
              <Image src='./search.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            <Tab
            height={'55px'}
              onClick={() => handleTabClick(2)}
              isActive={activeTab === 2}
            >
              <Image src='./sc.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            <Tab
            height={'55px'}
              onClick={() => handleTabClick(3)}
              isActive={activeTab === 3}
            >
              <Image src='./debug.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            <Tab
            height={'55px'}
              onClick={() => handleTabClick(4)}
              isActive={activeTab === 4}
            >
              <Image src='./extension.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            </flex>
            <flex mt='50' >
            <Tab
            height={'55px'}
              onClick={() => handleTabClick(5)}
              isActive={activeTab === 5}
            >
              <Image src='./debug.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            <Tab
            height={'55px'}
              onClick={() => handleTabClick(6)}
              isActive={activeTab === 6}
            >
              <Image src='./extension.png' alt='Dan Abramov' style={{ maxWidth: '25px' }}/>
            </Tab>
            </flex>

          </TabList>

          <TabPanels>
            <TabPanel w={'250px'} h='100vh' color='#fff' bg={'#131313'}  display={activeTab === 0 ? 'block' : 'none'}>
              <HStack>
              <Text >EXPLORER</Text>
              <Menu>
  <MenuButton>
  <Image src='./dots.png' alt='Dan Abramov' />
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

              </HStack>
              <Tabss />
            </TabPanel>
            <TabPanel w={'250px'} h='100vh'color='#fff' bg={'#131313'} display={activeTab === 1 ? 'block' : 'none'}>
            <Box bg={'#101010'} color={'#FFF'} overflow={'hidden'} >
       

       <Menu>
  <MenuButton>
  <Image src='./vsicon.png' alt='Dan Abramov' ml='20px' style={{ maxWidth: '25px' }}/>
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'} ml='10px' p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>



 



       </Box>
            </TabPanel>
            <TabPanel w={'250px'} h='100vh' color='#fff' bg={'#131313'} display={activeTab === 2 ? 'block' : 'none'}>
              <p>three!</p>
            </TabPanel>
            <TabPanel w={'250px'} h='100vh' color='#fff' bg={'#131313'} display={activeTab === 3 ? 'block' : 'none'}>
              <p>three!</p>
            </TabPanel>
            <TabPanel w={'250px'} h='100vh' color='#fff' bg={'#131313'} display={activeTab === 4 ? 'block' : 'none'}>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>


        <Box color={"#fff"}> 
        
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='xl'
        
      >
    
        <DrawerContent bg={'#101010'} color={'grey'} fontSize={'14px'} >
          <DrawerCloseButton />
          <Tabs position="relative" variant="unstyled">
    <TabList >
      <Tab fontSize={'13px'}>PROBLEMS</Tab>
      <Tab fontSize={'13px'}> OUTPUT</Tab>
      <Tab fontSize={'13px'}>DEBUG CONSOLE</Tab>
      <Tab fontSize={'13px'}>TERMINAL</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <Box></Box>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
      <TabPanel>
        <p>4!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>

         
        </DrawerContent>
      </Drawer>

        </Box>
        
        </Flex>
        <Box bg={'#101010'} color={'#FFF'} overflow={'hidden'} >
       <HStack spacing='24px'>

       <Menu>
  <MenuButton>
  <Image src='./vsicon.png' alt='Dan Abramov' ml='20px' style={{ maxWidth: '25px' }}/>
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'} ml='10px' p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

       <Menu>
  <MenuButton>
    File
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Edit
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Selection
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    View
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Go
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Run
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Terminal
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    WIndow
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton>
    Help
  </MenuButton>
  <MenuList bg= "#2c2c2c" border={'solid #393939'}  p={'1'}>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Create a Copy</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Download</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Mark as Draft</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Delete</MenuItem>
    <MenuItem bg= "#2c2c2c" h={'22px'} _hover={{ bg: "#2C57B7" }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
</HStack>
       </Box>
      
      </ChakraProvider>
    </>
  );
}
