import React from 'react';
import Grid from '@mui/material/Grid';


import {  CardMedia, Container, Typography,Box } from '@mui/material';

const Banner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{marginTop:'40%'}}>
                    <Typography variant='body2'>Individual</Typography>
                    <Typography variant='h2'>Jewelry Design</Typography>
                    <Typography variant='h6'>This beautiful galore of colours and patterns
is designed by Schoff</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <CardMedia
                                component="img"
                                height="450"
                                image='https://i.ibb.co/HKMfPbP/banner-left.jpg'
                                alt="Paella dish"
                    />
                    
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Banner;