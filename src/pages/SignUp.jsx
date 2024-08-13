import React from 'react';

import SignUpImg from "../assets/signup-pic.svg"
import { Box, Heading, Img, Input, Text } from '@chakra-ui/react';


function SignUpPage() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
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
        alignItems={"stretch"}
        flex={1}
        minW={200}
        my={5}
        gap={15}
      >

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
            w={"100%"}
            gap={10}
          >
            <Text>
              Monitor Name:
            </Text>
            <Input
              w={"100%"}
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
            w={"100%"}
            gap={10}
          >
            <Text>
              Monitor Email:
            </Text>
            <Input
              w={"100%"}
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

        </Box>


      </Box>

    </Box>
  )
}

export default SignUpPage;