import { Container, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Services = () => {
   const products= [
        {
        "name":"10K Solid Gold Diamond Necklace, Happy 10th Anniversary, Jewelry For Wife From Husband, 10 Year Wedding Anniversary Gift Idea",
        "price":"$ 179.95",
        "picture":"pic1",
        "rating":"4",
        "state":"false",
        "description":"A stunning, infinitely connected pair of 10K solid yellow gold hearts that perfectly symbolize your everlasting love. Each heart is intricately accented with 18 pave set diamonds with a 0.07-carat weight which adds magnificent sparkle.",
        "index":"1"
        },
        {
        "name":"Cute 14 karat yellow solid gold spiral diamond circle necklace on 14 karat solid yellow gold chain",
        "price":"$ 369.00",
        "picture":"neckless2",
        "rating":"4",
        "state":"false",
        "description":"4k gold yellow cute small spiral cirlce pendant on 14k yellow gold box chain . Set with 20 1.00mm diamonds and a total carat weight of H/SI 0.10 carats.",
        "index":"2"
        },
        {
        "name":"8-B3 14k Gold Solitaire Necklace, Tiny Diamond Pendant, Diamond Solitaire Necklace,",
        "price":"$ 230.00",
        "picture":"neckless3",
        "rating":"3.9",
        "state":"false",
        "description":"14K Solid Gold Available in 16 Available in 14k Yellow Gold, Rose Gold, and White Gold",
        "index":"3"
        },
        {
        "name":"0.60 Ct Diamond Necklace, 14Kt Gold Diamond Solitaire Necklace, Dainty Diamond Necklace",
        "price":"$ 256.00",
        "picture":"neckless4",
        "rating":"4.5",
        "state":"false",
        "description":"This is a beautiful diamond design pendant. It is set in real solid 14Kt Gold and the chain is 14Kt Gold as well. You can choose if you want 14Kt White Gold, 14Kt Yellow Gold or 14Kt Rose Gold.",
        "index":"4"
        },
        {
        "name":"Diamond Necklace/ Diamond Solitaire Necklace/ Dainty Diamond Necklace",
        "price":"$ 199.00",
        "picture":"neckless5",
        "rating":"5",
        "state":"false",
        "description":"Handcrafted 14k solid gold diamond necklace with big brilliant-cut diamonds.It's an heirloom-worthy piece that you can pass down or keep all to yourself.",
        "index":"5"
        },
        {
        "name":"Dainty AAA CZ Necklace, Floating Diamond Solitaire Necklace,",
        "price":"$ 250.00",
        "picture":"neckless2",
        "rating":"4.3",
        "state":"false",
        "description":"We handcraft this classic teardrop shaped cz solitaire necklace using sterling silver.The cubic zirconia is set in a prong basket and the pendent moves freely along the chain .",
        "index":"6"
        },
        {
        "name":"14K Gold Ten Commandments, Lion of Judah, royal design Pendant",
        "price":"$ 1032.00",
        "picture":"neckless2",
        "rating":"5",
        "state":"false",
        "description":"14k gold Stunning pendant illustrates the Ten Commandments in a royal design. There is a yellow gold base with white gold Lion of Judah holding The Ten Commandments are surrounded by stunning, glittering white VS diamonds.",
        "index":"7"
        },
        {
        "name":"Dainty Diamond Necklace - Diamond Solitaire Necklace ",
        "price":"$ 49.00",
        "picture":"neckless2",
        "rating":"3.6",
        "state":"false",
        "description":"Dainty beautiful gold necklace with a tiny diamond cz pendant. Very simple dress up dress down necklace. A barely there gold filled chain is paired with a 3mm round diamond cz.",
        "index":"8"
        },
        {
        "name":"Dainty Diamond Necklace .Floating Diamond Solitaire Necklace",
        "price":"$ 32.50",
        "picture":"neckless2",
        "rating":"4",
        "state":"false",
        "description":"This design is ready to ship in 1 - 2 business days. If you have custom made items in your cart, your order will ship separated into two shipments. Our turn around time is about 6 - 10 business days for custom made designs. This can change during peak seasons. Please check our home page for the most current times.",
        "index":"9"
        },
        {
        "name":"Diamond Necklace 0.07CT / 14k Gold Diamond Solitaire Necklace ",
        "price":"$ 170.00",
        "picture":"neckless2",
        "rating":"4.5",
        "state":"false",
        "description":"FEATURED PICTURE IS A SLIDING DIAMOND NECKLACE 0.07CT IN A 4 PRONG SETTING. IT IS AVAILABLE IN 14K SOLID YELLOW , WHITE AND ROSE GOLD. I MAKE THIS NECKLACE IN VARIOUS LENGTHS AND DIAMOND SIZES. PLEASE CHOOSE COLOR GOLD, DIAMOND SIZE AND LENGTH FROM THE OPTIONS.",
        "index":"10"
        }
        ]
    return (
        <Container>
            <Grid item={true}>
                {
                    products.slice(0,6).map(product=><Grid item xs={2} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.picture}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                Thi
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
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
                            </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Services;