import * as React from 'react';
import Typography from '@mui/material/Typography';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container, Grid } from '@mui/material';
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
            <h1>My Projects</h1>

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
                                <div className='border-card'>

                                    <Typography variant='h5'>{project.name}</Typography>
                                    <div>
                                        <Typography variant="body2" >
                                            {project.features.slice(0, 2)}
                                        </Typography>
                                    </div>
                                    <br />
                                </div>

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