import React from 'react';
import Cover from '../Cover/Cover';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import { Container } from '@mui/material';
import Blogs from '../Blogs/Blogs';


const Home = () => {
    // const particlesInit = (main) => {
    //     console.log(main);
    // };

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };
    return (


        <Container >
            <Cover></Cover>
            <Projects></Projects>
            <Services></Services>
            <Blogs></Blogs>
        </Container>


    );
};

export default Home;