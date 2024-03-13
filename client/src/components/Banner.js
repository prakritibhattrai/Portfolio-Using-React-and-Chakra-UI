import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from "framer-motion";
import resumePdf from '../../src/Resume_Prakriti.pdf';


const Banner = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleEmailClick = () => {
        const subject = encodeURIComponent('Software Development');
        const body = encodeURIComponent('Body of the email');
        window.open(`mailto:prakriti.bhattarai5@gmail.com?subject=${subject}&body=${body}`);
    };
    return (
        <>
            <Box
                position="relative"
                zIndex={1}
                py={[5, 20]}
                bgGradient="linear(to-r,white,gray.100)"
                minHeight={{ base: "auto", md: "auto" }}
                width="100%"
                boxShadow={'sm'}
                id="about"
            >

                <Flex
                    pt={[10, "130px", 10]}
                    maxW={{ base: "100%", md: "960px" }}
                    mx="auto"
                    position="relative"
                    zIndex={10}
                    color="gray.800"
                    flexDirection={{ base: "column", md: "row" }}
                    className="animated-content"
                    justifyContent={{ base: "center", md: "flex-start" }}
                >

                    <Box mb={{ base: [4, 4], md: 0 }} width={{ base: "90%", md: "70%" }} margin="auto" color="blue.900">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            fontWeight="medium"
                            textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                        >
                            <Text
                                mb={4}
                                width={{ base: "100%", md: "400px" }}
                                className="title"
                                noOfLines={2}
                                mr={'5px'}
                                fontWeight="medium"
                                color={'blue.900'}
                            >
                                <Text as="span" color='red.300' > Hi,</Text> I am Prakriti

                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        rotate: [0, 90, 0, -90, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        loop: Infinity,
                                        repeatType: "reverse",
                                    }}
                                    as="h3"
                                    fontSize={{ base: "sm", md: "sm" }}
                                    fontWeight="medium"
                                    mb={4}
                                    width={{ base: "100%", md: "400px" }}
                                    textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                                    className="title"
                                    noOfLines={2}
                                    lineHeight={'30px'}
                                >
                                    👋
                                </motion.span>

                            </Text>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <Heading
                                as="h1"
                                mb={4}
                                fontSize={'42px'}
                                width={{ base: "100%", md: "580px" }}
                                className="title"
                                lineHeight={'45px'}
                                fontWeight={'bold'}
                                color="blue.900" opacity={0.8}
                            >
                                Software Engineer, Full Stack Web Developer
                            </Heading>
                        </motion.div>
                        <Text fontSize={'15px'} height={'auto'} fontWeight={'md'} color={'gray.700'} width={{ base: "100%", md: "460px" }} borderColor={'red.300'}>

                            <Text listStyleType="none" pl={1}>
                                <Text mb={1} fontSize="14px" lineHeight="taller" fontWeight="sm" >
                                    <span style={{ fontStyle: '', color: 'red.300' }}>
                                        Picture this :
                                    </span> A world where every click feels like a magical journey, every scroll reveals a delightful surprise, and every interaction leaves a lasting impression.
                                    That's the world I strive to create with my code – a digital wonderland where innovation knows no bounds and creativity knows no limits.
                                </Text>

                            </Text>
                        </Text>

                        <Link
                            as={'button'}
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="red.200"
                            borderBottomWidth="3px" // Thickness of the double border
                            borderBottomColor="red.300" // Color of the double border
                            borderRightWidth="3px" // Thickness of the right border
                            borderRightColor="red.300" // Color of the right border
                            borderRadius="lg" // Border radius
                            px="4"
                            py="3"
                            bg="red.300"
                            width="150px"
                            color="white"
                            fontWeight="semibold"
                            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Box shadow effect
                            bgGradient="linear(to-r, red.400, red.300)"
                            transition="background-position 0.3s ease-in-out" // Transition for background color change
                            _hover={{
                                bgGradient: "linear(to-r, red.400, red.400)", // Change gradient on hover
                                color: "white",
                                transition: "background-position 0.3s ease-in-out"
                            }}
                            onClick={handleDownload}
                        >
                            My Resume
                        </Link>
                        <Link
                            as={'button'}
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="gray.200"
                            borderRadius="lg" // Border radius
                            px="4"
                            py="3"
                            ml={2}
                            width="150px"
                            color="blue.900"
                            fontWeight="semibold"
                            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Box shadow effect

                            transition="background-position 0.3s ease-in-out" // Transition for background color change
                            _hover={{
                                bgGradient: "linear(to-r, gray.50, gray.100)", // Change gradient on hover
                                color: "blue.900",
                                transition: "background-position 0.3s ease-in-out"
                            }}
                            onClick={handleEmailClick}
                        >
                            Hire Me
                        </Link>
                    </Box>

                    <Box
                        position="relative"
                        overflow="hidden"
                        className="image-container"
                        width={{ base: "50%", md: "30%" }} // Adjusted width for responsiveness
                        alignContent={{ base: "center", md: "end" }} // Align content for responsiveness
                        textAlign={{ base: "center", md: "right" }} // Align text for responsiveness
                    >
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            name="Prakriti"
                            size={"lg"}
                            src='https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-beauty-female-programmer-with-laptop-at-workplace-png-image_6058798.png'
                            borderRadius="25%"
                            boxShadow="0 10px 20px #9E9E9E"
                            className="image bounce"
                        />
                    </Box>
                </Flex >
            </Box >
        </>
    )
}

export default Banner;
