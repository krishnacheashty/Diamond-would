import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardMedia} from '@mui/material';
import Typography from '@mui/material/Typography';

const Upcoming = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1,backgroundColor:"#f9f9f9" }}>
                <Grid container >
                    <Grid  item xs={8} md={8} sx={{textAlign:'left'}}>
                    <Typography sx={{ my: 1.5,marginTop:'10%',fontWeight: 600 , color: 'black'}}  variant="h5" component="div">
                        Upcoming Events
                    </Typography>
                    <Typography sx={{ my: 1.5,marginTop:'10%',fontWeight: 600 , color: '#000',marginLeft:"53%"}}  variant="h6" component="div">
                       some new deigned coming soon
                    </Typography>
                    </Grid>
                    <Grid  item xs={4} md={4}>
                        
                    </Grid>
                    {/* 2nd section start here */}

                    <Grid  item xs={12} md={6}>
                        <Grid item xs={12}md={12}>
                            <Typography sx={{ my: 1.5,marginTop:'10%',fontWeight: 600 , color: '#000' ,}}  variant="p" component="div">
                                     Adipisicing Assumenda dolor ipsa consequatur earum sed animi 
                            </Typography>
                        </Grid>
                        <Grid item xs={12}md={12} 
                            sx={{
                                backgroundColor:'#000',
                                display:'flex',
                                alignItems:'center',
                                mt:"5px"
                            }}>
                            <Grid item xs={5}md={5}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://i.ibb.co/WnNPpfR/upcoming1jpg.jpg"
                                alt="Paella dish"
                            />
                               
                            </Grid>
                            <Grid item xs={6}md={6}>
                                <Typography variant='h6'sx={{color:'#d2aa5c'}}>
                                    love neckless for lady
                                </Typography>
                                <Typography variant='h6'sx={{color:'#d2aa5c'}}>
                                    upcoming
                                </Typography>
                            </Grid>
                        </Grid>
                        
                           
                    </Grid>

                    {/* 3rd section start here */}   
                    <Grid  item xs={12} md={6}>
                        <Grid item xs={12}md={12}>
                            <Typography sx={{ my: 1.5,marginTop:'10%',fontWeight: 600 , color: '#000' ,}}  variant="p" component="div">
                                      Osequatur  sed  non amet, nesciunt vero placeat odit dignissimos 
                            </Typography>
                        </Grid>
                        <Grid item xs={12}md={12} 
                            sx={{
                                display:'flex',
                                alignItems:'center',
                                mt:"5px",
                                backgroundColor:'#000',
                            }}>
                            <Grid item xs={5}md={5}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://i.ibb.co/ZMH3dbw/nacklace9.jpg"
                                alt="Paella dish"
                            />
                               
                            </Grid>
                            <Grid item xs={6}md={6} >
                                <Box >
                                <Typography variant='h6'  sx={{color:'#d2aa5c'}}>
                                    lovely white gold neckless
                                </Typography>
                                <Typography variant='h6'  sx={{color:'#d2aa5c'}}>
                                    UpComing
                                </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                
            </Box>
        </>
    );
};

export default Upcoming;