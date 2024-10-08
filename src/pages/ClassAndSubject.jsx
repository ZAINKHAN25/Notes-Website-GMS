import React from 'react';
import { Box, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SelectSubject() {
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
        Class 10:
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
            to="/class/10/biology"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Biology
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Chemistry
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            English
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Mutala
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Physic's
          </Button>
        </ListItem>

        <ListItem>
          <Button
            as={Link}
            to="/class/10/biology"
            bg={"var(--redColor)"}
            _hover={{ bg: `#a30606` }}
            borderRadius={20}
            px={25}
            py={10}
            cursor={"pointer"}
            textDecor={"none"}
            w="100%"
          >
            Math
          </Button>
        </ListItem>

      </List>
    </Box>
  );
}

export default SelectSubject;
