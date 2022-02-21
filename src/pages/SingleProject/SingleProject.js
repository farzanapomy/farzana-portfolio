import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router';
import './SingleProject.css'

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


            <Grid container spacing={2} data-aos="zoom-out-up" sx={{ color: 'white' }} >


                <Grid item xs={12} md={6} sx={{ textAlign: "left", marginTop: 15 }}>
                    <Typography variant='h3' >
                        {findProject[0]?.name}
                    </Typography>
                    <br />
                    <Typography variant='h5' >
                        Using technologies :
                    </Typography>
                    <br />
                    <Typography >
                        {findProject[0]?.technology}
                    </Typography>
                    <br />
                    <Typography variant='h4' >
                        Features :
                    </Typography>
                    <br />
                    <Typography>
                        -{findProject[0]?.features[0]} <br />
                        -{findProject[0]?.features[1]} <br />
                        -{findProject[0]?.features[1]}
                    </Typography>

                    <button className="link-btn">
                        <a style={{ textDecoration: 'none' }} href={findProject[0]?.liveLink}>Live link</a> {" "}
                    </button> {" "}
                    <button className="link-btn">
                        <a style={{ textDecoration: 'none' }} href={findProject[0]?.githubLink}>Github link</a>
                    </button>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '50%' }} src={findProject[0]?.img} alt="" />
                </Grid>
            </Grid >
        </Container >
    );
}

export default SingleProject;