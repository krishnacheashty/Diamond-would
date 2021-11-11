import React from 'react';
import Grid from '@mui/material/Grid';

import { Container } from '@mui/material';
const Banner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    some contain here
                </Grid>
                <Grid item xs={6} md={4}>
                    picture here
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Banner;