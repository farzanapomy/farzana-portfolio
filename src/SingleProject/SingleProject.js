import * as React from 'react';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
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


    // React.useEffect(() => {
    //     AOS.init();
    // }, [])


    return (
        <Container >
            <h2>{Id}</h2>
            <h2>Hello</h2>
            <h2>{findProject[0]?.name}</h2>

        </Container>
    );
}

export default SingleProject;