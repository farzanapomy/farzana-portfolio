import * as React from 'react';
import { Container, Grid } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router';


const SingleProject = () => {
    const { Id } = useParams()
    const [singleProjects, setSingleProjects] = React.useState([]);

    React.useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setSingleProjects(data))
    }, []);

    const findProject = singleProjects?.filter((singleProject) => (singleProject.id) == (Id));


    React.useEffect(() => {
        AOS.init();
    }, [])




    return (
        <Container >
            <h2>{Id}</h2>
            <h2>Hello</h2>


            <Grid data-aos="zoom-out-up" sx={{ backgroundColor: 'white' }}>
                <Grid item xs={12} md={6}>
                    <h2>{findProject[0]?.name}</h2>
                </Grid>
                <Grid>
                    <img src={findProject[0]?.img2} alt="" />
                </Grid>
            </Grid >
        </Container >
    );
}

export default SingleProject;