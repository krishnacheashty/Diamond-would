import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MyEachOrder from './MyEachOrder';

const MyOrder = () => {
    const {user,isLoading}=useAuth();
    const[order,setOrder]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data =>{
            /* just amer oder dekhabe and if email diye filter na kore jodi setevents e data diye kortam then mannage all er kaz ta korto. */
            const ordered=data.filter(pd=>pd.email===user.email)
            setOrder(ordered)
        })
    },[user.email])

    const handelDelete=(id)=>{
        fetch(`http://localhost:5000/order/${id}`,
        {method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount){
            alert("Do you want to DELETE your Order?")
            const remainingData=order.filter(event=>event._id!==id)
            setOrder(remainingData);
        }
    })
        

    }
    
    return (
        <>
        <Typography variant='h5' sx={{color:'blueviolet',my:'20px'}}>
            Display My Order
        </Typography>
        { !isLoading && <Grid item={true} container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
            { order.map(order=><MyEachOrder 
            key={order._id}
            order={order}
            handelDelete={handelDelete}
            >

            </MyEachOrder>
                )
            }
            
            </Grid>
        }


        {
            isLoading && <Box sx={{ display: 'flex',justifyContent:'center' }}>
            <CircularProgress />
          </Box>
        }
        </>
        
    );
};

export default MyOrder;