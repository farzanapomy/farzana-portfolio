import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid } from '@mui/material';
import fullstack from '../../../images/full-stack.jpg';
import mern from '../../../images/mern.jpg';
import react from '../../../images/react.jpg';
import Color from 'color';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { padding } from '@mui/system';
import './Services.css'




const Services = () => {

    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Container data-aos="zoom-out-down">
                <h1 className='highlighted-text' data-aos="zoom-out-down">My Services</h1>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} sx={{ my: 1 }} >
                        <Card data-aos="fade-up-left">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={fullstack}
                            />
                            <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Web Development
                                </Typography>
                                <Typography variant="body2" >
                                    I have such a beautiful projects based full stack.
                                </Typography>
                            </CardContent>

                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card data-aos="flip-left">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={mern}

                            />
                            <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    MERN Stack Development
                                </Typography>
                                <Typography variant="body2" >
                                    I am much comfortable with MERN Stack Projects.
                                </Typography>
                            </CardContent>

                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card data-aos="fade-up-right">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={react}
                            />
                            <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    React.js
                                </Typography>
                                <Typography variant="body2">
                                    My all big projects base on React.js.
                                </Typography>
                            </CardContent>

                        </Card>

                    </Grid>

                </Grid>




            </Container>
        </>
    );
}
export default Services;