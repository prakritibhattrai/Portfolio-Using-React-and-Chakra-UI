import './App.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Divider, Flex, Spinner, Text } from '@chakra-ui/react';
import { Suspense } from 'react';

const LazyNavbar = React.lazy(() => import('./components/Navbar'));
const LazyBanner = React.lazy(() => import('./components/Banner'));
const LazySkills = React.lazy(() => import('./components/Skills'));
const LazyContactForm = React.lazy(() => import('./components/ContactForm'));
const LazyFooter = React.lazy(() => import('./components/Footer'));
const LazyProjects = React.lazy(() => import('./components/Projects'));
const LazyLanguages = React.lazy(() => import('./components/Languages'));

function App() {


  return (
    <>
      <Suspense fallback={<Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box textAlign="center" color="blue.900">
          <Spinner thickness='5px' speed='0.7s' emptyColor='gray.200' color='red.500' size='xl' />
          <Flex alignItems="center" justifyContent="center" mt={4}>

          </Flex>
          <Text mt={2} color="gray.500">Please wait while we load the content</Text>
        </Box>
      </Box>}>
        <LazyNavbar />
        <LazyBanner />
        <LazyLanguages />
        <LazySkills />
        <LazyProjects />
        <Divider />
        <LazyContactForm />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default App;
