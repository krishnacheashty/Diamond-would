import React from 'react';
import Grid from '@mui/material/Grid';


import {  CardMedia,  Typography,Box } from '@mui/material';

const Banner = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} md={6} sx={{backgroundColor:'#f8f5ea'}}>
                    <Box sx={{marginTop:'20%'}}>
                    <Box sx={{width:'150px',mx:'auto'}}>
                        <CardMedia
                            component="img"
                            width="100px"
                            hight='20px'
                            image='https://i.ibb.co/Wz9P1NG/jewel2-339f32bd-f59b-42da-8d60-10159e6b1aaa.png'
                            alt="Paella dish"
                        />
                    </Box>
                    <Typography variant='body1' sx={{fontSize:'500',mb:'10px',color:''}}>Individual</Typography>
                    <Typography variant='h2'>Jewelry Design</Typography>
                    <Typography variant='h6'>This beautiful galore of colours and patterns
is designed by Rim Jewelry</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <CardMedia
                        component="img"
                        height="450"
                        image='https://cdn.shopify.com/s/files/1/1811/9385/files/jewel1_712212f2-13a9-4677-a2f1-28cbab658c3c.jpg?v=1557139733'
                        alt="Paella dish"
                    />
                    
                </Grid>
                
            </Grid>
        </>
    );
};

export default Banner;