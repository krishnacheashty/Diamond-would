import React, { useEffect, useState } from 'react';


import useAuth from '../../../hooks/useAuth';
import { CircularProgress, Grid, Typography } from '@mui/material';
import ManageAll from './manageall/ManageAll';
import { Box } from '@mui/system';



const ManageAllOrder = () => {
    const{isLoading}=useAuth()
    const[order,setOrder]=useState([])

    useEffect(()=>{
        fetch('https://shrouded-crag-83318.herokuapp.com/order')
        .then(res=>res.json())
        .then(data =>{
            /* just amer oder dekhabe and if email diye filter na kore jodi setevents e data diye kortam then mannage all er kaz ta korto. */
            
            setOrder(data)
           
        })
    },[])
    const handelDelete=(id)=>{
        fetch(`https://shrouded-crag-83318.herokuapp.com/order/${id}`,
        {method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.deletedCount){
            alert("Do you want to DELETE your Order?")
            const remainingData=order.filter(event=>event._id!==id)
            console.log(remainingData)
            setOrder(remainingData);
        }
    })
        

    }

    
    
    return (
        <>
        
        <Typography variant="h4" color="text.danger" sx={{color:'blueviolet',my:'20px'}}>
        Manage All Order
        </Typography>
        {!isLoading && <Grid item={true} container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
            {
                order.map(order=><ManageAll 
                    key={order._id}
                    order={order}
                    handelDelete={handelDelete}
                    ></ManageAll>)
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

export default ManageAllOrder;