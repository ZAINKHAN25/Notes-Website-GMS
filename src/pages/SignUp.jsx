import React from 'react';

import SignUpImg from "../assets/signup-pic.svg"
import { Box, Button, Heading, Img, Input, Text } from '@chakra-ui/react';


function SignUpPage() {
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
          src={SignUpImg}
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
          Sign Up Monitor
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
              Monitor Name:
            </Text>
            <Input
              w={500}
              px={15}
              py={10}
              bg={"transparent"}
              border={"2px solid white"}
              borderRadius={20}
              outline={"none"}
              placeholder={"Enter your monitor name..."}
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
              Monitor Class:
            </Text>
            <Input
              w={500}
              px={15}
              py={10}
              bg={"transparent"}
              border={"2px solid white"}
              borderRadius={20}
              outline={"none"}
              type={'number'}
              max={10}
              min={1}
              defaultValue={10}
              placeholder={"Enter Monitor Class Here..."}
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
              placeholder={"Enter your monitor email..."}
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
              placeholder={"Enter your monitor password..."}
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
            Sign Up Monitor
          </Button>

        </Box>


      </Box>

    </Box >
  )
}

export default SignUpPage;