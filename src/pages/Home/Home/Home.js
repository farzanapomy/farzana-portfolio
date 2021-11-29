import React from 'react';
import About from '../About/About';
import Cover from '../Cover/Cover';
import Projects from '../Projects/Projects';
import MyProject from '../MyProjects/ProjectOne';


const Home = () => {
    return (
        <div id='home'>
            <Cover></Cover>
            {/* <MyProject></MyProject> */}
            <Projects></Projects>
            <About></About>
        </div>
    );
};

export default Home;