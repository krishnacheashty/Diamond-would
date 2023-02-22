import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ImageCard = () => {
    
    return (
         {/* <Card sx={{marginTop:'10%'}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image=''
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                ''
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
                                kaz korte hobe
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
                        </Card>  */}  
    );
};

export default ImageCard;