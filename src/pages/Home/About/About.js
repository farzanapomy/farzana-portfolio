import { Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'


const About = () => {
    return (
        <Container>

            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: 'black', color: 'white', margin: '15px 0px', borderRadius: '15px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Hello There !!
                    </Typography>
                    <Typography variant="h5" component="div">
                        My name is <span style={{ color: 'tomato' }}>Farzana Pomy </span>.I am from bangladesh.
                        I am studying computer science in Port City International University.
                        I have no experience about web development . But i am comfortable to build a Front and back-end side projects.I build few project with Full stack projects.I know how to manage a day or 24 hours. I know how to improve my skill each and every time.Maybe I'm the person whose you are looking for ....
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        My Skils :
                    </Typography>
                    <Typography variant="body2">
                        <Box sx={{ my: 2 }} className='skils'>
                            Comfortable: HTML5 CSS3 Bootstrap5 JavaScript ES6 Rest API
                            <br /> React React Hooks  Context API  Express.js NodeJs Firebase
                        </Box>

                        <Typography>
                            Familiar: Material UI Browser API Debugging  Context API
                        </Typography>
                        <Typography>
                            Tools: Chrome Dev Tool  VSCode Git
                        </Typography>

                        <br />

                    </Typography>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>







        </Container>
    );
};

export default About;