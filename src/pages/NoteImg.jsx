import { Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react'

function NoteImg() {
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
        Class 10 {true ? ">" : ""} Biology {true ? ">" : ""} Chaptor : 01 {true ? ">" : ""} Page 2:
      </Heading>

      <Box
        border={"1px solid white"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box>
          <Img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZy1C08T3Uy8UtsdqTTNw5orC7VXoDy4Q1Q&s'}/>
        </Box>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default NoteImg;