import React from 'react';
import About from '../About/About';
import Cover from '../Cover/Cover';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
            <Cover></Cover>
            <Services></Services>
            <Projects></Projects>
            
            <About></About>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;