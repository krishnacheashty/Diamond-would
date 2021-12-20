import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ManageAll = ({order,handelDelete}) => {
     const{price,productName,userName,email,phone,address,_id,status}=order
    /* update handler */
    const handelUpdate=(id)=>{
      fetch(`http://localhost:5000/order/${id}`,{
         method:'PUT',
         headers:{
         'content-type':'application/json'
         }
      })
      .then(res=>res.json())
      .then(data=>{
            console.log(data)     
      })
    }


    return (
        <>
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345,backgroundColor:'#e3e7eb' }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           productName :{productName.slice(0,20)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
           userName :{userName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
           status :{status}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
           email :{email}
        </Typography>
        <Typography variant="body1" color="text.secondary">
        price :{price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        phone :{phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        address :{address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handelDelete(_id)} size="small" sx={{background:'#d2aa5c',color:'#000'}}>Delete</Button>
        <Button onClick={()=>handelUpdate(_id)} size="small" sx={{background:'#d2aa5c',color:'#000'}}>Update</Button>
       
      </CardActions>
    </Card>

        </Grid></>
    );
};

export default ManageAll;