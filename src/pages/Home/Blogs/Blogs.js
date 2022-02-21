import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <Container className='service-container'>
            <h1 className='high-text' data-aos="zoom-out-down">My Blogs</h1>
            <Grid container spacing={2} >
                {
                    blogs.map(blog =>
                        <Grid item xs={12} md={4} data-aos="zoom-out-left" className='service-card'>
                            <Card data-aos="fade-up-left" >
                                <CardMedia className='service-img'
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={blog.img}

                                />
                                <CardContent className='blog-card'>
                                    <Typography variant="h5" component="Container"
                                    >
                                        {blog.name}
                                    </Typography>
                                    <Typography sx={{ margin: '22px 0px', fontSize: '14px' }} >
                                        {blog.des}
                                    </Typography>
                                    <Box className='blog-btn' sx={{ color: 'black' }}>
                                        <button>
                                            <a href={blog.devLink}>Read More</a>
                                        </button>
                                    </Box>
                                </CardContent>

                            </Card>
                        </Grid>
                    )}

            </Grid>
        </Container>
    );
};

export default Blogs;