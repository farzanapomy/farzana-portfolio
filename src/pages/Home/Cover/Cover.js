import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'
import './Cover.css'

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

                <Grid item xs={12} md={6} data-aos="fade-down-right" sx={{ lineHeight: '50px' }}>

                    <Box className="cover-details-name">
                        <span className="primary-text">
                            {' '}
                            <p><br /> Hello, This is <br /> <span className="highlighted-text">
                                Farzana Pomy
                            </span>
                            </p>
                        </span>
                    </Box>
                    <Box className="skills-title">
                        <li>
                            Web Developer
                        </li>
                        <li>
                            MERN Stack Developer
                        </li>
                    </Box>

                    <Box className="cover-role" sx={{ fontSize: 18, marginBottom: '10px' }}>
                        <span className='cover-tagline' >
                            I am a self-motivated web developer. Always try to learn new technologies. Dream to work in the software industry and want to do something for Bangladesh.

                        </span>
                        <Box className='grid-btn' >

                            <Box>
                                <Link to='/about'>
                                    <button>About me</button>
                                </Link>
                                <React.Fragment >
                                    <button className='resume-btn'><a href="Farzana_Resume.pdf" download='Farzana_Resume.pdf'>
                                        Resume
                                    </a></button>
                                </React.Fragment>
                            </Box>

                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cover;