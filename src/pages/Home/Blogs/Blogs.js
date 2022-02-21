import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <Container className='service-container'>
            <h1 className='high-text' data-aos="zoom-out-down">My Blogs</h1>
            {
                blogs.map(blog =>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={4} data-aos="zoom-out-left" className='service-card'>
                            <Card data-aos="fade-up-left" >
                                <CardMedia className='service-img'
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={blog.img}

                                />
                                <CardContent sx={{ backgroundColor: 'black', color: 'white' }}>
                                    <Typography gutterBottom variant="h5" component="Container">
                                        Web Development
                                    </Typography>
                                    <Typography variant="body2" >
                                        I have such a beautiful projects based full stack.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                )}

        </Container>
    );
};

export default Blogs;