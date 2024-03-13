import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaPhp, FaNodeJs, FaReact, FaLaravel, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiMysql } from 'react-icons/si';

const Languages = () => {

    return (
        <Box
            display="flex"
            alignItems="center"
            py={12}
            justifyContent="space-between"
            maxW={'960px'}
            margin={'auto'}
            color={'blue.900'}
        >

            <Box textAlign="center">
                <FaPhp size={40} opacity={0.9} />
            </Box>
            <Box textAlign="center">
                <FaReact size={36} opacity={0.9} />
            </Box>
            <Box textAlign="center">
                <FaNodeJs size={34} opacity={0.9} />
            </Box>
            <Box textAlign="center">
                <FaCss3Alt size={34} opacity={0.9} />
            </Box>
            <Box textAlign="center">
                <FaLaravel size={32} opacity={0.9} />
            </Box>
            <Box textAlign="center">
                <SiMysql size={42} opacity={0.9} />
            </Box>
            <Box textAlign="center">
                <SiJavascript size={34} opacity={0.9} />
            </Box>
        </Box>
    );
}

export default Languages;
