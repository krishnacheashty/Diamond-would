import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import NavbarTop from '../sheared/navigation/NavbarTop';




const Explore = () => {
    const[product,setProduct]=useState([])
    const [expanded, setExpanded] = React.useState(false);

    

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        useEffect(()=>{
            fetch('http://localhost:5000/products')
            .then(res=>res.json())
            .then(data=>{
            //  
                setProduct(data)
            })
        },[])
    
    

    return (
        <Container>
            <NavbarTop/>
            <Typography variant="h3" color="text.dark">
                products
            </Typography>
            <Grid item={true} container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
                        
                {
                    product.map(product=><Grid item xs={12} md={4} key={product.index}>
                        <Card sx={{marginTop:'10%'}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.picture}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {product.name}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded.toString()}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                                {/* kaz korte hobe */}
                               <Link  to={`/parchage/${product._id}`}   style={{textDecoration:'none'}}>
                               <Button variant='contained' sx={{marginLeft:'200px'}}> Bye Now</Button>
                               </Link> 
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Details:</Typography>
                                <Typography paragraph>
                                    {product.description}
                                </Typography>
                                
                                
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid> ) 
                }
            </Grid>
        </Container>
    );
};

export default Explore;
