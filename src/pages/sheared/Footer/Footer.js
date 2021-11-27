import { Container,Grid } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <>
            <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.88)',color:'white', marginTop:'5%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Box sx={{marginTop:"20%"}}>
                            <Typography variant='h6'>Diamond house</Typography>
                            <Typography variant='p'>visit our show room</Typography>
                            <Typography variant='p'>New Collection</Typography>
                            <Typography variant='p'>Gold Collection</Typography>
                            <Typography variant='p'>Up Here</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'> Services</Typography>
                        <Box sx={{fontFamily:'monospace',fontSize:''}}>
                            <Typography variant='body1'>Emergency Services</Typography>
                            <Typography variant='body1'>Any king Gold Polish </Typography>
                            <Typography variant='body1'>Diamond set Polish </Typography>
                            <Typography variant='body1'> Sell Diamond Neckless</Typography>
                            <Typography variant='body1'>Others Variants </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'> Show Rooms</Typography>
                        <Typography variant='body1'>Dhaka City</Typography>
                        <Typography variant='body1'>Borishal City </Typography>
                        <Typography variant='body1'>Rajshahi City  </Typography>
                        <Typography variant='body1'>Rangpur City </Typography>
                        <Typography variant='body1'>Khulna City </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'>Our Address</Typography> 
                        <Typography variant='body1'>Dhaka-101010 hanson</Typography> 
                        <Typography variant='body1'>Yards</Typography> 
                        <Typography variant='body1'>Icons</Typography> 
                        <Typography variant='body1'>Call Now</Typography> 
                        <Typography variant='body1'>01788674335</Typography> 
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;