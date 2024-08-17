import React from 'react';
import { Box, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SelectPage() {
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
        Class 10 {true ? ">" : ""} Biology {true ? ">" : ""} Chaptor : 01:
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
            to="1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Page : 01 (Title Page)
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Page : 02 (Index Page)
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Page : 03 (Question 1)
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Page : 04 (Question 1)
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Page : 05 (Question 2)
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="1"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Page : 06 (Question 2, 3)
          </Button>
        </ListItem>

      </List>
    </Box>
  );
}

export default SelectPage;