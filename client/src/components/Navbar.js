import React, { useState } from 'react';
import {
    Flex, Collapse, Box, Link, useDisclosure, Menu, MenuItem, MenuDivider, Text, Icon
} from '@chakra-ui/react';
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [activeSection, setActiveSection] = useState('');

    const handleMenuClick = (section) => {
        setActiveSection(section);
        scrollToSection(section);

    };

    const handleCollapse = (section) => {
        setActiveSection(section);
        scrollToSection(section);
        onToggle(false);
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Box bgGradient="linear(to-r,white,gray.50)" color={'blue.900'} boxShadow="lg" width={'100%'} position={'fixed'} zIndex={20}>
            <Flex
                align="center"
                justify="space-between"
                padding="3"
                maxW="960px"
                margin="auto"

            >

                <Flex fontSize="2xl" fontWeight="600">
                    <Link
                        to={'/'}
                        as="a"
                        fontSize="md"
                        fontFamily="cursive"
                        _hover={{ textDecoration: "none" }} // Removes underline on hover
                    >
                        Prakriti Bhattarai
                    </Link>
                </Flex>
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                    alignItems="center"
                    gap="20"
                    fontWeight={'bold'}
                    fontSize={'14px'}
                >
                    <Link

                        className={`menu-link ${activeSection === 'about' && 'active'}`}
                        onClick={() => handleMenuClick('about')}
                        fontWeight={'bold'}
                    >
                        About
                    </Link>
                    <Link
                        className={`menu-link ${activeSection === 'projects' && 'active'}`}
                        onClick={() => handleMenuClick('projects')}
                        fontWeight={'bold'}
                    >
                        Projects
                    </Link>
                    <Link
                        className={`menu-link ${activeSection === 'skills' && 'active'}`}
                        onClick={() => handleMenuClick('skills')}
                        fontWeight={'bold'}
                    >
                        Skills
                    </Link>
                    <Link
                        className={`menu-link ${activeSection === 'contact' && 'active'}`}
                        onClick={() => handleMenuClick('contact')}
                        fontWeight={'bold'}
                    >
                        Contact
                    </Link>
                    <Flex gap={4} fontSize="16px" color={'blue.900'}>
                        <Link href="https://github.com/prakritibhattrai" target='__blank' >
                            <Icon as={FaGithub} _hover={{ color: 'gray.800' }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/prakriti-bhattarai-85456a215/" target='__blank'>
                            <Icon as={FaLinkedin} _hover={{ color: 'blue.800' }} />
                        </Link>
                        <Link href="#">
                            <Icon as={FaTwitter} _hover={{ color: 'cyan.700' }} />
                        </Link>
                        <Link href="https://leetcode.com/user0510PN/" target='__blank'>
                            <Icon as={SiLeetcode} _hover={{ color: 'yellow.700' }} />
                        </Link>
                    </Flex>
                </Flex>

                <Box display={['block', 'block', 'none', 'none']}>
                    <RiMenu3Fill as="button" onClick={onToggle} />
                </Box>
            </Flex>

            <Collapse in={isOpen} animateOpacity d={{ base: "block", lg: "none" }}>
                <Box p="1rem" bg="whiteAlpha.900" color="blue.900">
                    <Menu color="white" bg="teal.500" rounded="md" shadow="md" id="collapse-menu"
                    >
                        <MenuItem
                            as='a'
                            fontSize={'14px'} fontWeight={'bold'}
                            className={` ${activeSection === 'about' && 'active'}`}
                            onClick={() => handleCollapse('about')}
                        >
                            About
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                            as='a'
                            fontSize={'14px'} fontWeight={'bold'}
                            className={` ${activeSection === 'skills' && 'active'}`}
                            onClick={() => handleCollapse('skills')}
                        >
                            Skills
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                            as='a'
                            fontSize={'14px'} fontWeight={'bold'}
                            className={` ${activeSection === 'projects' && 'active'}`}
                            onClick={() => handleCollapse('projects')}
                        >
                            Projects
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                            as='a'
                            fontSize={'14px'} fontWeight={'bold'}
                            className={` ${activeSection === 'contact' && 'active'}`}
                            onClick={() => handleCollapse('contact')}
                        >
                            Contact
                        </MenuItem>
                    </Menu>
                </Box>
            </Collapse>
        </Box>
    );
}

export default Navbar;
