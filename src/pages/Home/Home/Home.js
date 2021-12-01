import React from 'react';
import About from '../About/About';
import Cover from '../Cover/Cover';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Services from '../Services/Services';
import { Container } from '@mui/material';


const Home = () => {
    return (


        <Container >

            <Cover></Cover>
            <Services></Services>
            <Projects></Projects>
            <About></About>
            <ContactMe></ContactMe>
        </Container>

    );
};

export default Home;