import React from 'react';
import { Box, Flex, Image, Link, Heading, Icon, Text } from '@chakra-ui/react';
import projectImage1 from '../../src/ekabasket.png';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
    return (
        <Box py={10} px={4} id='projects'>
            <Heading fontSize="25px" textAlign="center" color={'blue.900'}>
                <Box
                    as="span"
                    borderBottom="2px dotted"
                    pb="0px"
                    _hover={{ borderBottomColor: "gray" }}
                    borderColor={'gray'}
                >
                    Projects
                </Box>
            </Heading>

            <Flex justifyContent="space-between" flexWrap="wrap" maxW="960px" mx="auto" mt={8} gap={1}>
                <Link
                    href='https://ekabasket.com/'
                    target="_blank"
                    boxShadow={'md'}
                    width={['100%', 'calc(100%)', 'calc(33.33% - 5px)']}
                    borderWidth="1px"
                    borderColor="gray.300"
                    _hover={{ boxShadow: 'md', bg: 'gray.100' }}
                    textDecoration="none"
                    // minHeight={'250px'}
                    mt={2}
                    p={5}
                    bg={'gray.50'}
                    role='group'
                    position={'relative'}
                >
                    <Image src={projectImage1} height={'200px'} width={'100%'} alt="Project 1 Image" objectFit={'cover'} />
                    <Box pt={2} >
                        <Text fontDecoration={'underline'} fontWeight={'medium'} lineHeight={'24px'} color={'blue.800'} fontSize={'md'}>
                            Ecommerce Website Using PHP, Laravel Framework
                        </Text>
                    </Box>
                    <Icon
                        _groupHover={{ visibility: 'visible' }}
                        position="absolute"
                        bottom="50%"
                        left="50%"
                        transform="translate(-50%, 50%)"
                        visibility="hidden"
                        border={'1px solid'}
                        borderRadius={'sm'}
                        color='blue.900'
                        bg={'gray.200'}
                        height={'35px'}
                        w={'55px'}
                        p={2}
                        fontSize={'xl'}
                        as={FaSearch}
                    />
                </Link>
                <Link
                    href='https://github.com/prakritibhattrai/Food-Ordering-Application-using-React'
                    target="_blank"
                    boxShadow={'md'}
                    width={['100%', 'calc(100%)', 'calc(33.33% - 5px)']}
                    borderWidth="1px"
                    borderColor="gray.300"
                    _hover={{ boxShadow: 'md', bg: 'gray.100' }}
                    textDecoration="none"

                    mt={2}
                    p={5}
                    bg={'gray.50'}
                    position={'relative'}
                    role='group'

                >
                    <Image src='https://socialsocial.social/btabcloud/uploads/2022/06/food-delivery-software-1654237411lp84c-700x560.jpg' objectFit={'cover'}
                        height={'200px'} width={'100%'} alt="Project 1 Image" />
                    <Box pt={2} >
                        <Text fontDecoration={'underline'} fontWeight={'medium'} lineHeight={'24px'} color={'blue.800'} fontSize={'md'}>
                            Food Ordering Application Using React and Tailwind CSS
                        </Text>
                    </Box>
                    <Icon
                        _groupHover={{ visibility: 'visible' }}
                        position="absolute"
                        bottom="50%"
                        left="50%"
                        transform="translate(-50%, 50%)"
                        visibility="hidden"
                        border={'1px solid'}
                        borderRadius={'sm'}
                        color='blue.900'
                        bg={'gray.200'}
                        height={'35px'}
                        w={'55px'}
                        p={2}
                        fontSize={'xl'}
                        as={FaSearch}
                    />
                </Link>
                <Link
                    href='https://github.com/prakritibhattrai/mern-ecommerce-application'
                    target="_blank"
                    boxShadow={'md'}
                    width={['100%', 'calc(100%)', 'calc(33.33% - 5px)']}
                    borderWidth="1px"
                    borderColor="gray.300"
                    _hover={{ boxShadow: 'md', bg: 'gray.100' }}
                    textDecoration="none"

                    mt={2}
                    p={5}
                    bg={'gray.50'}
                    position={'relative'}
                    role='group'
                >
                    <Image src='https://5.imimg.com/data5/SELLER/Default/2022/12/UI/MT/TS/107827373/6505894-500x500.jpg'
                        objectFit={'cover'} height={'200px'} width={'100%'} alt="Project 1 Image" />
                    <Box pt={2} >
                        <Text fontDecoration={'underline'} fontWeight={'medium'} lineHeight={'24px'} color={'blue.800'} fontSize={'md'}>
                            Ecommerce Website Using MERN Stack
                        </Text>
                    </Box>
                    <Icon
                        _groupHover={{ visibility: 'visible' }}
                        position="absolute"
                        bottom="50%"
                        left="50%"
                        transform="translate(-50%, 50%)"
                        visibility="hidden"
                        border={'1px solid'}
                        borderRadius={'sm'}
                        color='blue.900'
                        bg={'gray.200'}
                        height={'35px'}
                        w={'55px'}
                        p={2}
                        fontSize={'xl'}
                        as={FaSearch}
                    />
                </Link>

            </Flex>
        </Box>
    );
}

export default Projects;
