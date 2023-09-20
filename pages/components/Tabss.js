import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ChevronRightIcon
} from '@chakra-ui/react';

export const Tabss = () => {
  return (
    <>
      <style>
        {`
          .accordion-item {
            border-top: none !important;
            border-bottom: none !important;
          }
        `}
      </style>

      <Accordion defaultIndex={[0]} allowMultiple ml={'-17px'} fontSize={'13px'}>
        <AccordionItem className="accordion-item">
          <h2>
            <AccordionButton>
            <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontSize={'13px'}>
                PORTFOLIO
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Accordion defaultIndex={[0]} allowMultiple >
        <AccordionItem className="accordion-item">
          <h2>
            <AccordionButton>
            <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontSize={'13px'}>
                Section 1 title
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} ml={'25px'} borderLeft={'solid #393939'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accordion-item">
          <h2>
            <AccordionButton>
            <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontSize={'13px'}>
                Section 2 title
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accordion-item">
          <h2>
            <AccordionButton>
            <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontSize={'13px'}>
                OUTLINE
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accordion-item">
          <h2>
            <AccordionButton>
            <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontSize={'13px'}> 
                TIMELINE
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        
      </Accordion>
    </>
  );
};
