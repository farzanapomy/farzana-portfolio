import * as React from 'react';
import Typography from '@mui/material/Typography';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Projects.css'

const Projects = () => {

    React.useEffect(() => {
        AOS.init();
    }, [])


    const [projects, setProjects] = React.useState([]);
    React.useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);


    return (
        <Container className='project-container'>
            <h1 data-aos="zoom-out-down">My Projects</h1>

            <Grid container spacing={2} >
                {
                    projects.map(project =>
                        <Grid item xs={12} md={4}
                            key={project.id}>
                            <div data-aos="zoom-in"
                                className='project-card'
                            >
                                <img
                                    className='card-img'
                                    height="200"
                                    src={project.img}
                                    alt="Paella dish"
                                />
                                <Box className='border-card' >

                                    <Typography variant='h5' sx={{ color: 'white', marginBottom: '5px' }}>{project.name}</Typography>
                                    <div >
                                        <Typography variant="body6" >
                                            {project.features.slice(0, 1)}
                                        </Typography>
                                        <Typography variant="body6" >
                                            <Typography variant='h6' sx={{ color: 'white', margin: '5px 0px ' }}> Technologies :
                                            </Typography> {project.technology}
                                        </Typography>
                                    </div>
                                    <br />
                                </Box>

                                <Link to={`/projects/${project.id}`} style={{ color: 'black', paddingRight: ' 10px 20px', textDecoration: 'none', }}>
                                    <button className='project-btn'>Full Project</button>

                                </Link>
                            </div>
                        </Grid>
                    )
                }

            </Grid>
        </Container >
    );
}

export default Projects;