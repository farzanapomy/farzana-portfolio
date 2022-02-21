import React from 'react';
import './Footer.css'
import { Container, Box, Typography, Grid } from '@mui/material';
import './Footer.css';


const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', marginTop: '55px', color: 'white', textAlign: 'left' }}>
            <Container >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} sx={{ marginBottom: '25px' }}>
                        <Typography variant='h4'>
                            Farzana Akter
                        </Typography>
                        <Typography sx={{ fontSize: '15px' }}>
                            Halishahar Housing Estate,Chittagong
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: '15px' }}>
                            farzanapomy56@gmail.com
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ marginBottom: '25px' }}>
                        <Typography variant='h4'>Find Me</Typography>

                        <Typography >
                            <a style={{ fontSize: '15px', color: 'white', textDecoration: 'none' }} href="https://www.linkedin.com/in/farzana-pomy-11b725147/">Linkedin</a>
                        </Typography>
                        <Typography>
                            <a style={{ fontSize: '15px', color: 'white', textDecoration: 'none' }} href="https://github.com/farzanapomy">Github</a>
                        </Typography>
                        <Typography>
                            <a style={{ fontSize: '15px', color: 'white', textDecoration: 'none' }} href="https://dev.to/farzanapomy">Dev.to</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ marginBottom: '25px' }}>
                        <Typography variant='h4' sx={{ marginBottom: '10px' }}>Social Links</Typography>
                        <div className='font-link'>
                            <a href="https://github.com/farzanapomy"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/farzana-pomy-11b725147/"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/farxana.pomye/"><i class="fab fa-facebook"></i></a>


                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Footer;