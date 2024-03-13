import { Box, Flex, Icon, IconButton, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <Box padding={10} textAlign={'center'} bg={'gray.100'} color={'blue.900'}>
                <Flex flexWrap="wrap" justify="space-between" alignItems="center" maxW={'960px'} mx={'auto'} fontSize={'sm'}>
                    <Text mb={{ base: 4, md: 0 }}>
                        © Prakriti Bhattarai All right Reserved
                    </Text>

                    <Flex gap={4} fontSize="22px" mb={{ base: 4, md: 0 }}>
                        <Link href="https://github.com/prakritibhattrai" target='__blank' _hover={{ textDecoration: 'none' }}>
                            <Icon as={FaGithub} color="gray.600" _hover={{ color: 'gray.800' }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/prakriti-bhattarai-85456a215/" target='__blank' _hover={{ textDecoration: 'none' }}>
                            <Icon as={FaLinkedin} color="blue.600" _hover={{ color: 'blue.800' }} />
                        </Link>
                        <Link href="#" _hover={{ textDecoration: 'none' }} target='__blank'>
                            <Icon as={FaTwitter} color="cyan.500" _hover={{ color: 'cyan.700' }} />
                        </Link>
                        <Link href="https://leetcode.com/user0510PN/" _hover={{ textDecoration: 'none' }}>
                            <Icon as={SiLeetcode} color="yellow.500" _hover={{ color: 'yellow.700' }} />
                        </Link>
                    </Flex>
                    <Box>
                        <IconButton
                            position="fixed"
                            bottom="20px"
                            right="20px"
                            cursor="pointer"
                            transition="background-color 0.3s, color 0.3s"
                            onClick={scrollToTop}
                            variant="outline"
                            borderColor="gray.400" // Set border color
                            colorScheme="gray" // Set color scheme for icon
                            aria-label="Back to Top"
                            bg={'red.300'}
                            boxShadow={'md'}
                            _hover={{
                                bg: 'red.400'
                            }}
                            color={'white'}
                            icon={<MdKeyboardArrowUp fontSize={'md'} />}
                        />
                    </Box>

                </Flex>
            </Box>
        </>
    )
}

export default Footer
