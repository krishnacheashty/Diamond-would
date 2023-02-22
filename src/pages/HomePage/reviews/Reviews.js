import { Card, CardContent, CardMedia,  Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';

const Reviews = () => {
     const[review,setReview]=useState([]) 
    useEffect(()=>{
        fetch('https://diamond-would-server-side.onrender.com/review')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[])
    /* console.log(review) */
    return (
        <Box sx={{backgroundColor:'#f9f9f9',}}>
            <Typography variant="h4" color="text.dark" sx={{marginY:"30px"}}>
                Review
            </Typography>
            <Box sx={{width:'150px',marginLeft:'42.5%',mb:3}}>
            <CardMedia
                component="img"
                width='100px'
                height="20px"
                image="https://i.ibb.co/VpWGDyg/divider1.png"
                alt="Paella dish"
            />
            </Box>
            <Grid item={true} container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
                        
                {
                    review.map(product=><Grid item xs={12} md={4} key={product._id}>
                        <Card sx={{marginTop:'10%' ,backgroundColor:'',marginBottom:"20px"}} >
                            
                            
                            <CardContent  >
                                <Typography variant="body2" >
                               <span  >User Name</span>: {product?.userName}
                                </Typography>
                                <Typography variant="body2">
                                <span >Product Name</span>: {product?.product}
                                </Typography>
                            </CardContent>
                            
                            <CardContent>
                                
                            <Typography paragraph>
                                Review Description :   { product?.description?.slice(0,80)}
                                </Typography >
                            <Typography mt="3">Rating :<Box><Rating  name="read-only" value={product?.rating} readOnly /></Box> </Typography>  
                            </CardContent>
                            
                        </Card>
                    </Grid> ) 
                }
            </Grid>
            
        </Box>
    );
};

export default Reviews;