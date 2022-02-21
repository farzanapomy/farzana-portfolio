import React from 'react';
import { CardContent, Container, Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import js from '../../../images/skills/js.jpg'
import react from '../../../images/skills/react.png'
import mongoDb from '../../../images/skills/mongodb.jpg'
import express from '../../../images/skills/express.jpg'
import html from '../../../images/skills/html5.png'
import css from '../../../images/skills/css3.png'
import nodejs from '../../../images/skills/node.jpg'
import mui from '../../../images/skills/mui.png'
import bootstrap from '../../../images/skills/bootstrap.jpg'
import git from '../../../images/skills/git.png'
import firebase from '../../../images/skills/firebase.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './About.css'


const About = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])


    return (
        <Container >

            {/* about me  */}

            <Grid container spacing={2} data-aos="zoom-in" sx={{ margin: '10px 0px 35px 0px' }}>
                <Grid item md={4} >
                    <Typography variant="h4" sx={{ textAlign: 'left' }}>
                        About me
                    </Typography>
                </Grid>
                <Grid item md={7}>
                    <CardContent sx={{ minWidth: 275 }} style={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: '20px' }} >
                            Hello There !!
                        </Typography>
                        <Typography sx={{ fontSize: 18 }}>
                            My name is Farzana Pomy.I am from bangladesh.
                            I am studying Computer Science & Engineering in Port City International University.
                            I am comfortable to build a Front and back-end side <Link style={{ textDecoration: "underline" }} to='/projects'>projects</Link>.I build several Full stack projects. Maybe I'm the person whose you are looking for ....
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>

            <div className='hor-div'></div>

            {/* education */}

            <Grid container spacing={2} data-aos="zoom-in" sx={{ marginBottom: '35px' }}>
                <Grid item md={4} sx={{ marginTop: '15px' }}>
                    <Typography variant="h4" sx={{ textAlign: 'left' }}>
                        Education
                    </Typography>
                </Grid>

                <Grid item md={7}>
                    <CardContent sx={{ minWidth: 275 }} style={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 900, }} gutterBottom>
                            BSc in Computer Science and Engineering
                        </Typography>
                        <Typography sx={{ fontSize: 15, }}>
                            Port City International University
                            <br />
                            Passing Year: 2023
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <div className='hor-div'></div>

            {/* skills  */}

            <Grid container spacing={2} data-aos="zoom-in" sx={{ margin: '35px 0px' }}>
                <Grid item md={4} >
                    <Typography variant="h4" sx={{ textAlign: 'left' }}>
                        Skills
                    </Typography>
                </Grid>

                <Grid item md={7} sx={{ margin: '35px' }}>
                    <Box className='img-container' data-aos="zoom-out" >
                        <Box className='skill-img'>
                            <img src={js} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>JavaScript</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={react} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>React.js</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={mongoDb} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>MongoDb</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={express} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>Express.js</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={html} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>HTML5</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={css} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>CSS3</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={nodejs} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>Node.js</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={mui} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>Material UI</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={bootstrap} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>Bootstrap 5</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={git} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>Git</Typography>
                        </Box>
                        <Box className='skill-img'>
                            <img src={firebase} alt="" />
                            <Typography style={{ fontWeight: 900, margin: '5px' }}>Firebase</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <div className='hor-div'></div>

            {/* training */}
            <Grid container spacing={2} data-aos="zoom-in" sx={{ marginBottom: '35px' }}>
                <Grid item md={4} sx={{ marginTop: '15px' }}>
                    <Typography variant="h5" sx={{ textAlign: 'left' }}>
                        Professional Training
                    </Typography>
                </Grid>

                <Grid item md={7} sx={{ marginTop: '15px', marginBottom: '15px' }}>
                    <Typography sx={{ fontSize: '15px', textAlign: 'left' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 900, textAlign: 'left' }}>
                            Complete Web Development Course
                        </Typography>
                        Programming Hero
                        <br />
                        Jun 2021 - Dec 2021
                    </Typography>
                </Grid>
            </Grid>


        </Container>
    );
};

export default About;