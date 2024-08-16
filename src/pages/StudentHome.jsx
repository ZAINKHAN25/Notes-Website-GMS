import React from 'react';
import { Box, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SelectClass() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      overflowX={"hidden"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading
        color={`var(--yellowColor)`}
        fontSize={"45px"}
        mb={10}
      >
        Select Your Class:
      </Heading>

      <List
        spacing={5}
        w={"80%"}
        minW={500}
        my={15}
        px={5}
      >

        <ListItem>
          <Button
            as={Link}
            to="/class/10"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Class 10
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/9"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Class 9
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/8"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Class 8
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/7"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Class 7
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/6"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Class 6
          </Button>
        </ListItem>

      </List>
    </Box>
  );
}

export default SelectClass;
