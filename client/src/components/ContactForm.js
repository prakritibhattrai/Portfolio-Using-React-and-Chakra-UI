import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineMail } from 'react-icons/md';

const ContactForm = () => {
    const handleEmailClick = () => {
        const subject = encodeURIComponent('Software Development');
        const body = encodeURIComponent('Body of the email');
        window.open(`mailto:prakriti.bhattarai5@gmail.com?subject=${subject}&body=${body}`);
    };
    return (
        <>
            <Flex
                flexDirection={['column', 'column', 'row']}
                maxW="960px"
                gap={5}
                mx="auto"
                py={6}
                id='contact'

                color={'blue.900'}
            >
                <Box width={['100%', '100%', '70%']} margin={'auto'} padding={12} textAlign={'center'}>
                    <Box>
                        <Text fontWeight="bold">Have a project ?</Text>
                        <Heading fontSize={['30px', '35px']}>Let's Connect!</Heading>
                        <Text fontSize="md" color="gray.500" mt={3}>
                            Let's collaborate and turn ideas into code - drop me a line at prakriti.bhattarai5@gmail.com!
                        </Text>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" my={6}>
                        <Flex
                            justifyContent="center" alignItems="center"
                            as="button"
                            width="180px"
                            h="50px"
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="red.200"
                            borderBottomWidth="3px"
                            borderBottomColor="red.200"
                            borderRightWidth="3px"
                            borderRightColor="red.200"
                            borderRadius="lg"
                            bg="red.300"
                            color="white"
                            fontWeight="semibold"
                            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                            _hover={{
                                bg: "red.400",
                                color: "white",
                            }}
                            onClick={handleEmailClick}
                            fontSize={'18px'}
                            gap={1}
                        >
                            <MdOutlineMail ml={1} fontSize={'20px'} />  Email
                        </Flex>
                    </Flex>


                </Box>

            </Flex>

        </>
    )
}

export default ContactForm
