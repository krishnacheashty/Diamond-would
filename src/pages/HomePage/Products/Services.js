import { Button,  Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';




const Services = () => {
    const[product,setProduct]=useState([])
   
        useEffect(()=>{
            fetch('https://shrouded-crag-83318.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>{
            //  
                setProduct(data)
            })
        },[])
    
    

    return (
        <>
            <Typography variant="h3" color="text.dark" sx={{backgroundColor:''}}>
                Products
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
            <Grid item={true} container rowSpacing={0} columnSpacing={{ xs: 0, md: 0 }}>
                        
                {
                    product.slice(0,6).map(product=><Grid item xs={12} md={6} key={product.index}>
                        <Card sx={{ display: 'flex',height:"330px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: "275px",}}
                                    image={product.picture}
                                    alt="Live pic"
                                />
                                <Box sx={{ display: 'flex',width:'330px', flexDirection: 'column', hight:"330px" }}>
                                    <CardContent sx={{ flex: '1 0 auto',backgroundColor:'black',hight:"330px" }}>
                                        <Typography component="div" variant="h5" sx={{color:"#ffff" ,marginTop:"20%"}}>
                                        {product.name.slice(0,20)}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{color:"#ffff"}} component="div">
                                            <Typography paragraph>Details:</Typography>
                                                <Typography paragraph>
                                                    {product.description.slice(0,60)}
                                                </Typography>
                                            </Typography>
                                        <Link  to={`/parchage/${product._id}`}   style={{textDecoration:'none'}}>
                                            <Button variant='contained' sx={{mx:'auto',backgroundColor:'#d2aa5c'}}> Bye Now</Button>
                                        </Link>
                                    </CardContent>
                                    
                                </Box>
                        
                        </Card>
                    </Grid> ) 
                }
            </Grid>
        </>
    );
};

export default Services;
