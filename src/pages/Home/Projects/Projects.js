import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container, Grid, CardContent } from '@mui/material';
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

            <Grid container spacing={4} sc={{ my: 1 }} >
                {
                    projects.map(project =>
                        <Grid item xs={12} md={4}
                            className='project-card'
                            key={project.id}>
                            <Card data-aos="zoom-in"
                                className='single-card'
                            >
                                <CardHeader
                                    title={project.name}

                                />
                                <Typography>Duration Time : {project.durationTime}</Typography>
                                <CardMedia
                                    className='card-img'
                                    component="img"
                                    height="194"
                                    image={project.img}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests.Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <br />

                                <Link to={`/projects/${project.id}`} style={{ color: 'black', paddingRight: ' 10px 20px', textDecoration: 'none', }}>
                                    <button className='project-btn'>Full Project</button>

                                </Link>


                            </Card>
                        </Grid>
                    )
                }

            </Grid>
        </Container >
    );
}

export default Projects;