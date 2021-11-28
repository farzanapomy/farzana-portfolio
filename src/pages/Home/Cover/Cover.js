import React from 'react';
import Typical from 'react-typical'
import Container from '@mui/material/Container';
import './Cover.css'
import { Button } from '@mui/material';
const Cover = () => {
    return (
        <Container>
            <div className="cover-container" >
                <div className="cover-parent">
                    <div className="cover-details">
                        <div className="cover" >
                            <a href='https://www.linkedin.com/in/farzana-pomy-11b725147/' target='_blank'> <i class="fab fa-linkedin"></i>
                            </a>
                            <a href='https://github.com/farzanapomy' target='_blank'> <i className="fab fa-github"></i>
                            </a>

                        </div>

                        <div className="cover-details-name">
                            <span className="primary-text">
                                {' '}
                                Hello ,This is  <span className="highlighted-text">
                                    Farzana Pomy
                                </span>
                            </span>
                        </div>

                        <div className="cover-role">
                            <span className='primary-text'>
                                {" "}
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
                                I am <span style={{ color: 'tomato' }}>Farzana</span> from Bangladesh. am a junior web developer.I know how to manage a day or 24 hours. I know how to improve my skill each and every time.Maybe I'm the person whose you are looking for ....
                            </span>
                        </div>

                        <div className="cover-options">
                            <Button variant="contained">{" "}
                                Hire Me {" "}
                            </Button>
                            <p>
                                <a href="FarzanaResume.pdf" download='FarzanaResume.pdf' style={{ textDecoration: "none" }}>

                                    <Button variant="contained">Download Resume</Button>
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>




        </Container>
    );
};

export default Cover;