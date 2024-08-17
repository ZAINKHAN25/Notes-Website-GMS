import React from 'react';
import { Box, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SelectNote() {
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
        Class 10 {true ? ">" : ""} Biology:
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
            to="/class/10/biology/1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chaptor : 01
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology/1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chaptor : 02
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology/1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chaptor : 03
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology/1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chaptor : 04
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology/1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chaptor : 05
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology/1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chaptor : 06
          </Button>
        </ListItem>

      </List>
    </Box>
  );
}

export default SelectNote;