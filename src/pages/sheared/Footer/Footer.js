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
                        <Typography variant='h6'>Emergency Dental Care</Typography>
                        <Typography variant='h6'>Check Up</Typography>
                        <Typography variant='h6'>Treatment of Personal Diseases</Typography>
                        <Typography variant='h6'>Tooth Extraction</Typography>
                        <Typography variant='h6'>Check Up Here</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'> Services</Typography>
                        <Typography variant='h6'>Emergency Dental Care </Typography>
                        <Typography variant='h6'>Eye Check Uo </Typography>
                        <Typography variant='h6'>Tooth Extraction </Typography>
                        <Typography variant='h6'> Treatment of Personal Diseases</Typography>
                        <Typography variant='h6'>Heard Problem Check Up </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'> Oral Health</Typography>
                        <Typography variant='h6'>Emergency Dental Care </Typography>
                        <Typography variant='h6'>Emergency Heart Care </Typography>
                        <Typography variant='h6'>Dental Care Before  </Typography>
                        <Typography variant='h6'>Dental Care Booking </Typography>
                        <Typography variant='h6'>Eye Care </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h4'>Our Address</Typography> 
                        <Typography variant='h6'>new York-101010 hanson</Typography> 
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