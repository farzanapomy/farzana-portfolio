import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


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
        <Container >
            <Grid container spacing={2}>

                {
                    projects.map(project =>
                        <Grid item xs={12} md={4}
                         key={project.id}>
                            <Card sx={{ maxWidth: 345 }} data-aos="fade-up-left"
                               >
                                <CardHeader

                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
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
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >

                                    </ExpandMore>
                                    <Link to={`projects/singleProject/${project.id}`}>
                                        <Button >Full Project</Button>
                                    </Link>

                                </CardActions>

                            </Card>
                        </Grid>
                    )
                }

            </Grid>



        </Container >
    );
}

export default Projects;