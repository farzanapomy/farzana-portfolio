import React from 'react';
import About from '../About/About';
import Cover from '../Cover/Cover';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';


const Home = () => {
    return (
        <div id='home'>
            <Cover></Cover>
            {/* <MyProject></MyProject> */}
            <Projects></Projects>
            <About></About>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;