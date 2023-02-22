import { Button,Box,Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid xs={12}sm={12}md={7}>
                <Typography sx={{color:'red',fontSize:'30px',text:'center',marginTop:''}}>page 404....</Typography>
                </Grid>
                <Grid xs={12}sm={12}md={5}>
                    <Link to='/home' style={{textDecoration:'none',}}>
                        <Button color="inherit" sx={{color:'#fff'}}>Home</Button>
                    </Link>
                </Grid>
            </Grid>
            
            
        </Box>
    );
};

export default PageNotFound;
