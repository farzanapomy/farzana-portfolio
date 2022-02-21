import React from 'react';
import Particles from "react-tsparticles";

import About from '../About/About';
import Cover from '../Cover/Cover';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Services from '../Services/Services';
import { Container } from '@mui/material';


const Home = () => {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (


        <Container >
            <Cover></Cover>
            <Projects></Projects>
            <Services></Services>
            <ContactMe></ContactMe>
        </Container>


    );
};

export default Home;