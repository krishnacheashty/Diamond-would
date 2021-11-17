import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';

const Reviews = () => {
     const[review,setReview]=useState([]) 
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[])
    console.log(review)
    return (
        <Container>
            <Typography variant="h4" color="text.dark" sx={{marginTop:'20px'}}>
                Review
            </Typography>
            <Grid item={true} container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
                        
                {
                    review.map(product=><Grid item xs={12} md={4} key={product._id}>
                        <Card sx={{marginTop:'10%' ,backgroundColor:'rgba(0 0 0 .4)'}}>
                            
                            
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                               userName : {product?.userName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                               Product Name : {product?.product}
                                </Typography>
                            </CardContent>
                            
                            <CardContent>
                                
                            <Typography paragraph>
                                description :    {product?.description}
                                </Typography>
                             Rating :   <Rating name="read-only" value={product?.rating} readOnly />
                            </CardContent>
                            
                        </Card>
                    </Grid> ) 
                }
            </Grid>
            
        </Container>
    );
};

export default Reviews;