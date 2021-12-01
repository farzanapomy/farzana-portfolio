import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
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


    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };




    return (
        <Container className='project-container'>
            <h2>My Projects</h2>
            <Grid container spacing={2} sc={{ my: 1 }} >
                {
                    projects.map(project =>
                        <Grid item xs={12} md={4}

                            key={project.id}>
                            <Card data-aos="zoom-in"
                                className='project-card'
                            >
                                <CardHeader


                                    title={project.name}

                                />
                                <Typography>Duration Time : {project.durationTime}</Typography>
                                <CardMedia
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