import React from 'react';
import Grid from '@mui/material/Grid';
import './Projects.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProjectOne from '../MyProjects/ProjectOne';
import ProjectTwo from '../MyProjects/ProjectTwo';

const Projects = () => {


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <h5 style={{ margin: "15px", padding: "15px", textDecoration: "" }}>My Projects</h5>

               
                <Link to='/projectOne'>
                    <p className="dashboard-menu mt-5">First Project</p>
                </Link>
                <Link to='/projectTwo'>
                    <p className="dashboard-menu mt-5">Second Project</p>
                </Link>
               



            </Grid>

            <Grid item xs={12} md={6}>
                
                    <Routes>
                        <Route path="/" element={<ProjectOne />} />
                        <Route path="/projectTwo" element={<ProjectTwo />} />
                    </Routes>


             
               
            </Grid>

        </Grid >

    );
};

export default Projects;