import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typical from 'react-typical'
import Container from '@mui/material/Container';
import './Cover.css'
import { Button, Grid } from '@mui/material';
import img from '../../../images/profile-photo.jpg'
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const Cover = () => {
    const useStyles = makeStyles({
        root: {
            background: (props) =>
                props.color === 'red'
                    ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                    : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: (props) =>
                props.color === 'red'
                    ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
                    : '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            height: 48,

            padding: '0 70px',
            margin: 8,
        },
    });

    function MyButton(props) {
        const { color, ...other } = props;
        const classes = useStyles(props);
        return <Button className={classes.root} {...other} />;
    }

    MyButton.propTypes = {
        color: PropTypes.oneOf(['blue', 'red']).isRequired,
    };


    function MyButton(props) {
        const { color, ...other } = props;
        const classes = useStyles(props);
        return <Button className={classes.root} {...other} />;
    }

    MyButton.propTypes = {
        color: PropTypes.oneOf(['blue', 'red']).isRequired,
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='cover-container'>


            <Grid container spacing={2} >
                <Grid item xs={12} md={6} data-aos="fade-up-left">
                    <Box className="profile-picture">
                        <Box className="picture-background " >

                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} data-aos="fade-down-right" >

                    <Box className="cover-details-name">
                        <span className="primary-text">
                            {' '}
                            <p>

                                Hello... <br /> This is  <span className="highlighted-text">
                                    Farzana Pomy
                                </span>
                            </p>
                        </span>
                    </Box>
                    <Box className="cover-role">
                        <span >

                            <h1>

                                {" "}
                                <Typical

                                    loop={Infinity}

                                    steps={[
                                        'Junior Web Developer',
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
                        <span className='cover-tagline' variant='h2'>
                            I am <span style={{ color: 'tomato' }}>Farzana</span> from Bangladesh.I am a junior web developer.
                        </span>

                        <Box>
                            <Box className="icons">
                                <a className="cover-icons" href='https://www.linkedin.com/in/farzana-pomy-11b725147/' target='_blank'>LinkedIn {' '}
                                </a> {' '}
                                <a className="cover-icons" href='https://github.com/farzanapomy' target='_blank'>Github {' '}
                                </a>
                            </Box>
                        </Box>

                        <Box className='resume-btn'>

                            <React.Fragment >
                                <MyButton color="blue"><a href="FarzanaResume.pdf" download='FarzanaResume.pdf' style={{ textDecoration: "none" }}>

                                    <Button variant="contained" >Explore more in Resume</Button>
                                </a></MyButton>
                            </React.Fragment>
                        </Box>


                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cover;