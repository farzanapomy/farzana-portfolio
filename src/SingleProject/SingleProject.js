import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Container, Typography } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router';

const SingleProject = () => {
    const { id } = useParams()


    const [singleProjects, setSingleProjects] = React.useState([]);

    useEffect(() => {
        const url = `/projects.json/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleProjects(data))
    }, []);


    React.useEffect(() => {
        AOS.init();
    }, [])


    return (
        <Container >
            <h2>{id}</h2>
            <h2>Hello</h2>
            <h2>{singleProjects.name}</h2>

        </Container>
    );
}

export default SingleProject;