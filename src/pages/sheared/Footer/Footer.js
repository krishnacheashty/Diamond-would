import { Container,Grid } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Container>
            <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.88)',color:'white', marginTop:'5%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6'>Diamond house</Typography>
                        <Typography variant='p'>visit our show room</Typography>
                        <Typography variant='p'>New Collection</Typography>
                        <Typography variant='p'>Gold Collection</Typography>
                        <Typography variant='p'>Up Here</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'> Services</Typography>
                        <Typography variant='h6'>Emergency Services</Typography>
                        <Typography variant='h6'>Any king Gold Polish </Typography>
                        <Typography variant='h6'>Diamond set Polish </Typography>
                        <Typography variant='h6'> Sell Diamond Neckless</Typography>
                        <Typography variant='h6'>Others Variants </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'> Show Rooms</Typography>
                        <Typography variant='h6'>Dhaka City</Typography>
                        <Typography variant='h6'>Borishal City </Typography>
                        <Typography variant='h6'>Rajshahi City  </Typography>
                        <Typography variant='h6'>Rangpur City </Typography>
                        <Typography variant='h6'>Khulna City </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'>Our Address</Typography> 
                        <Typography variant='h6'>Dhaka-101010 hanson</Typography> 
                        <Typography variant='h6'>Yards</Typography> 
                        <Typography variant='h6'>Icons</Typography> 
                        <Typography variant='h6'>Call Now</Typography> 
                        <Typography variant='h6'>01788674335</Typography> 
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;