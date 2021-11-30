import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Container, Typography } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router';

const SingleProject = () => {
    const id = useParams()

    React.useEffect(() => {
        AOS.init();
    }, [])

    // const [singleProjects, setSingleProjects] = React.useState([]);
    // React.useEffect(() => {
    //     fetch(`/projects.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, []);

    return (
        <Container >
            <h2>{id}</h2>
            <h2>Hello</h2>

        </Container>
    );
}

export default SingleProject;