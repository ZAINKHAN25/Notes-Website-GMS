import React from 'react';

import LoginImg from "../assets/login-pic.svg"
import { Box, Button, Heading, Img, Input, Text } from '@chakra-ui/react';


function LoginPage() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
        minW={200}
        my={5}
        gap={15}
      >
        <Img
          src={LoginImg}
          w={"500px"}
          h={"500px"}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        flex={1}
        minW={200}
        my={5}
        gap={15}
      >
        <Box>

        </Box>

        <Heading
          color={`var(--yellowColor)`}
          fontSize={"45px"}
        >
          Login Monitor
        </Heading>


        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          my={5}
          gap={15}
        >

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            gap={10}
          >
            <Text>
              Monitor Email:
            </Text>
            <Input
              w={500}
              px={15}
              py={10}
              bg={"transparent"}
              border={"2px solid white"}
              borderRadius={20}
              outline={"none"}
              type={'email'}
              placeholder={"Monitor Email..."}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            gap={10}
          >
            <Text>
              Monitor Password:
            </Text>
            <Input
              w={500}
              px={15}
              py={10}
              bg={"transparent"}
              border={"2px solid white"}
              borderRadius={20}
              outline={"none"}
              type={'password'}
              placeholder={"Monitor Password..."}
            />
          </Box>

          <Button
            ms={"auto"}
            mt={10}
            border={"none"}
            borderRadius={20}
            px={25}
            py={10}
            fontSize={20}
            cursor={"pointer"}
            _hover={{ bg: `#a30606` }}
            bg={`var(--redColor)`}
          >
            Login
          </Button>

        </Box>


      </Box>

    </Box >
  )
}

export default LoginPage;