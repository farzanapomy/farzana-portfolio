import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid } from '@mui/material';
import fullstack from '../../../images/full-stack.jpg';
import mern from '../../../images/mern.jpg';
import react from '../../../images/react.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Services.css'




const Services = () => {

    React.useEffect(() => {
        AOS.init();
    }, [])
    return (

        <Container className='service-container'>
            <h1 className='high-text' data-aos="zoom-out-down">My Services</h1>
            <Grid container spacing={2} >
                <Grid item xs={12} md={4} data-aos="zoom-out-left" className='service-card'>
                    <Card data-aos="fade-up-left" >
                        <CardMedia className='service-img'
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={fullstack}
                        />
                        <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                            <Typography gutterBottom variant="h5" component="Container">
                                Web Development
                            </Typography>
                            <Typography variant="body2" >
                                I have such a beautiful projects based full stack.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} data-aos="zoom-out-down" className='service-card'>
                    <Card data-aos="flip-left">
                        <CardMedia
                            className='service-img'
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={mern}

                        />
                        <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                            <Typography gutterBottom variant="h5" component="Container">
                                MERN Stack Development
                            </Typography>
                            <Typography variant="body2" >
                                I am comfortable with MERN Stack Projects.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} data-aos="zoom-out-right" className='service-card'>
                    <Card data-aos="fade-up-right">
                        <CardMedia
                            className='service-img'
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={react}
                        />
                        <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                            <Typography gutterBottom variant="h5" component="Container">
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

    );
}
export default Services;