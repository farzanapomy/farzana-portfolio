import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Container, Typography } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css'

const SingleProject = () => {
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
        <Container >
            {projects.map(project =>
                <Box data-aos="fade-up-left"
                    key={project.id}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            bgcolor: 'black',
                            border: '1px solid white',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: 1,
                            fontWeight: 'bold',
                            m: 1
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: '100%',
                                width: 350,
                                p: 1,
                                // maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            // alt="The house from the offer."
                            src={project.img}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'flex-start' },
                                m: 3,
                                minWidth: { md: 350 },
                            }}
                        >

                            <Box component="span" sx={{ fontSize: 25, mt: 1, color: 'tomato' }}>
                                {project.name}
                            </Box>
                            <Box component="span" sx={{ color: 'white', fontSize: 22 }}>
                                {project.description}
                            </Box>
                            <Box
                                sx={{
                                    mt: 1.5,
                                    p: 0.5,
                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    borderRadius: '5px',
                                    color: 'primary.main',
                                    fontWeight: 'medium',
                                    display: 'flex',
                                    fontSize: 12,
                                    alignItems: 'center',
                                    '& svg': {
                                        fontSize: 21,
                                        mr: 0.5,
                                    },
                                }}
                            >
                                <ErrorOutlineIcon />
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    Duration Time :
                                    {project.durationTime}
                                </Typography>

                            </Box>
                        </Box>
                    </Box>

                </Box>
            )}

        </Container>
    );
}

export default SingleProject;