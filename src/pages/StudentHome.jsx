import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

function StudentHome() {
  return (
    <Box
      w={"100vw"}
      minH={"100vh"}
      display={"flex"}
      justifyContent={"start"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading
        color={`var(--yellowColor)`}
        fontSize={"45px"}
      >
        Select Your Class
      </Heading>


      <Box
        w={"1110px"}
        bg={"red"}
      >
        <Box>
          <Text>Chaptor : 1</Text>
        </Box>
      </Box>


    </Box>
  )
}

export default StudentHome