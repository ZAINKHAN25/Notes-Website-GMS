import { Box, Button, Heading, Img, Input, Text, Textarea } from '@chakra-ui/react';
import { MdDownloadForOffline } from "react-icons/md";
import React from 'react';

function NoteImg() {
  // Array to generate related pages
  const relatedPages = new Array(6).fill(null); // Creates an array with 6 elements

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      overflowX={"hidden"}
      display={"flex"}
      p={15}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading
        color={`var(--yellowColor)`}
        fontSize={45}
        mb={10}
      >
        Class 10 {true ? ">" : ""} Biology {true ? ">" : ""} Chapter : 01 {true ? ">" : ""} Page 2:
      </Heading>

      <Box
        w={"80vw"}
        minW={500}
        px={15}
      >
        <Box
          w={"100%"}
          border={"1px solid white"}
          my={15}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"start"}
          py={15}
          px={25}
          gap={15}
          borderRadius={15}
        >
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Img
              objectFit={"contain"}
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZy1C08T3Uy8UtsdqTTNw5orC7VXoDy4Q1Q&s'}
              borderRadius={15}
            />
          </Box>
          <Box
            display={"flex"}
            flex={1}
            flexDir={"column"}
            alignItems={"stretch"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
              w={"100%"}
            >
              <Heading>
                Biology Chp:1, Page 2
              </Heading>

              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                mx={5}
                gap={15}
                fontSize={15}
              >
                <MdDownloadForOffline cursor={"pointer"} size={25} />
                <Box as='span' cursor={"pointer"}>
                  5 Likes
                </Box>
              </Box>

            </Box>

            <Text
              p={15}
              fontSize={13}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sequi soluta perferendis quidem vel possimus iure minus dicta iste ullam laboriosam distinctio fuga, sint nostrum dolorem tempore. Impedit, distinctio itaque.
            </Text>

            <Box
              p={15}
              borderY={"1px solid white"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"stretch"}
              gap={15}
            >
              <Input
                placeholder="Your name"
                type="text"
                bg={"transparent"}
                border={"1px solid white"}
                borderRadius={15}
                p={15}
                outline={"none"}
                defaultValue={"abc..."}
              />
              <Textarea
                resize={"vertical"}
                placeholder="Add a comment"
                bg={"transparent"}
                border={"1px solid white"}
                borderRadius={15}
                p={15}
                outline={"none"}
                defaultValue={"lorem..."}
              >
              </Textarea>

              <Button
                ms={"auto"}
                mt={10}
                border={"none"}
                borderRadius={20}
                px={25}
                py={10}
                fontSize={15}
                cursor={"pointer"}
                _hover={{ bg: `#a30606` }}
                bg={`var(--redColor)`}
              >
                Add a Comment
              </Button>

            </Box>

            <Box>
              <Heading
                color={`var(--yellowColor)`}
                fontSize={20}
                mb={10}
                p={15}
              >
                Previous Comments:
              </Heading>

              <Box
                borderY={".5px solid rgba(255,255,255,20%)"}
                p={15}
              >
                <Text
                  fontSize={13}
                  fontWeight={"bold"}
                  mb={5}
                >
                  John Doe - 2022-01-10
                </Text>
                <Text
                  fontSize={13}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita cum similique obcaecati laudantium harum deserunt quasi ab laborum velit, alias quas illo iure repudiandae animi ut. Earum, obcaecati quisquam?
                </Text>
              </Box>
              <Box
                borderY={".5px solid rgba(255,255,255,20%)"}
                p={15}
              >
                <Text
                  fontSize={13}
                  fontWeight={"bold"}
                  mb={5}
                >
                  Jane Doe - 2022-01-15
                </Text>
                <Text
                  fontSize={13}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita cum similique obcaecati laudantium harum deserunt quasi ab laborum velit, alias quas illo iure repudiandae animi ut. Earum, obcaecati quisquam?
                </Text>
              </Box>
            </Box>

          </Box>
        </Box>

      </Box>

      <Heading
        color={`var(--yellowColor)`}
        fontSize={45}
        my={10}
      >
        Related Pages:
      </Heading>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={15}
        w={"80vw"}
        minW={500}
        p={15}
        my={15}
      >
        {relatedPages.map((_, index) => (
          <Box
            key={index}
            cursor={"pointer"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            transition={"all .3s"}
            _hover={{
              opacity: .8,
            }}
          >
            <Img
              objectFit={"cover"}
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZy1C08T3Uy8UtsdqTTNw5orC7VXoDy4Q1Q&s'}
              borderRadius={15}
              width={150}
              height={220}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NoteImg;
