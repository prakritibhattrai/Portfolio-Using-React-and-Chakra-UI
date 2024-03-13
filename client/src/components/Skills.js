import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { FaDesktop, FaCode, FaTools } from 'react-icons/fa';

const Skills = () => {
    return (
        <Box py={10} bg={'gray.50'} id='skills'>
            <Heading fontSize="25px" textAlign="center">
                <Box
                    as="span"
                    borderBottom="2px dotted"
                    borderColor={'gray'}
                    pb="0px"
                    _hover={{ borderBottomColor: "gray" }}
                    color={'blue.900'}
                >
                    My Expertise
                </Box>
            </Heading>
            <Flex justifyContent="space-between" color={'blue.900'} flexWrap="wrap" maxW="960px" mx="auto" pt={"50px"} gap={'1px'}>
                <Box
                    width={['100%', '45%', '32%']}
                    position="relative"
                    overflow="hidden"
                    borderRadius="md"
                >
                    <Box
                        //p={5}
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FaDesktop color='gray.900' size={30} />
                        <Text textAlign="center" mt={2} fontWeight="semibold">Front-End Developer</Text>
                        <Text textAlign="center" fontSize={'sm'} color="gray.500">Tech Stack includes HTML, CSS, JavaScript, React, Tailwind CSS, Chakra-UI, Bootstrap</Text>
                    </Box>
                </Box>

                <Box
                    width={['100%', '45%', '32%']}
                    position="relative"
                    overflow="hidden"
                    borderRadius="md"
                >
                    <Box
                        //p={5}
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        <FaCode size={30} />
                        <Text mt={2} fontWeight="semibold">Back-End Developer</Text>
                        <Text fontSize={'sm'} color="gray.500">Tech Stack includes Node.js, PHP, API Development, MVC, OOP</Text>
                    </Box>
                </Box>

                <Box
                    width={['100%', '45%', '32%']}
                    position="relative"
                    overflow="hidden"
                    borderRadius="md"
                >
                    <Box
                        //p={5}
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign={"center"}
                    >
                        <FaTools size={30} />
                        <Text mt={2} fontWeight="semibold">Other Tools</Text>
                        <Text color="gray.500" fontSize={"sm"}>Tech Stack includes Git, VS Code, Docker</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default Skills;
