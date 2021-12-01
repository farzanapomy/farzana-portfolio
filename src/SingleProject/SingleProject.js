import * as React from 'react';
import { useEffect } from 'react';
import { CardActionArea, Container, Grid, Typography } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const SingleProject = () => {
    const { Id } = useParams()


    const [singleProjects, setSingleProjects] = React.useState([]);


    React.useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setSingleProjects(data))
    }, []);

    const findProject = singleProjects?.filter((singleProject) => (singleProject.id) == (Id));


    // React.useEffect(() => {
    //     AOS.init();
    // }, [])




    return (
        <Container >
            <h2>{Id}</h2>
            <h2>Hello</h2>


            <Grid>
                <Grid item xs={12} md={6}>
                    <h2>{findProject[0]?.name}</h2>
                </Grid>
                <Grid>
                    <img src={findProject[0]?.img} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
}

export default SingleProject;