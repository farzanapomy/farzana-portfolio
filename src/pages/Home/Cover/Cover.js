import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typical from 'react-typical'
import Container from '@mui/material/Container';
import './Cover.css'
import { Button, Grid } from '@mui/material';
import img from '../../../images/profile-photo.jpg'

const Cover = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Container>
                <div style={{ margin: "0px auto" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sm={12} data-aos="fade-up-left">
                            <div className="profile-picture">
                                <div className="picture-background " >
                                    {/* <img src={img} alt="" square={true} /> */}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} sm={12} data-aos="fade-down-right">

                            <div className="cover-details-name">
                                <span className="primary-text">
                                    {' '}
                                    <p>

                                        Hello, <br /> This is  <span className="highlighted-text">
                                            Farzana Pomy
                                        </span>
                                    </p>
                                </span>
                            </div>
                            <div className="cover-role">
                                <span >

                                    <h1>

                                        {" "}
                                        <Typical

                                            loop={Infinity}

                                            steps={[
                                                'Junior Developer',
                                                1200,
                                                'MERN Stack Developer',
                                                1200,
                                                'React Developer',
                                                1200,
                                            ]}
                                            wrapper="p"
                                        />
                                    </h1>
                                </span>
                                <span className='cover-tagline'>
                                    I am <span style={{ color: 'tomato' }}>Farzana</span> from Bangladesh.I am a junior web developer.I know how to manage a day or 24 hours. I know how to improve my skill each and every time.Maybe I'm the person whose you are looking for ....
                                </span>

                                <div className="cover-icons">
                                    <span><h2>Find me </h2> </span>

                                    <a href='https://www.linkedin.com/in/farzana-pomy-11b725147/' target='_blank'>LinkedIn <i className="fab fa-linkedin"></i>
                                    </a> <br />
                                    <a href='https://github.com/farzanapomy' target='_blank'>Github <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>

                            <div >
                                <Button variant="contained" className="cover-options">{" "}
                                    Hire Me {" "}
                                </Button>
                                <p>
                                    <a href="FarzanaResume.pdf" download='FarzanaResume.pdf' style={{ textDecoration: "none" }}>

                                        <Button variant="contained" className='resume-btn'>Download Resume</Button>
                                    </a>
                                </p>

                            </div>
                        </Grid>


                    </Grid>



                </div>
            </Container>
        </>
    );
};

export default Cover;