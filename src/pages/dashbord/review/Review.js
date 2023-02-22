import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const{user}=useAuth()
    const [orderInfo,setOrderInfo]=useState({})
    
    

    const onBlurChange=(e)=>{
        const field=e.target.name
        const value=e.target.value
        console.log(field,value)
        const newUser={...orderInfo}
        newUser[field]=value
        setOrderInfo(newUser)
        // console.log(newUser)
    }
    
    const fromHandler=(e)=>{
        const review={
            ...orderInfo,
            userName:user.displayName,
            email:user.email,
            

        }
        console.log(review)
        axios.post('https://shrouded-crag-83318.herokuapp.com/review',review)
        .then(data=>{
            if(data){
                alert("Do you want to add that service?")
            }
                  
        })

        e.preventDefault()

        /* post method */
        
            
       
     }
    return (
        <>
        <Typography variant='h5' sx={{color:'blueviolet',my:'20px'}}>
            Give Review
        </Typography>
        <form onSubmit={fromHandler}>
            
            <TextField
                required
                name='email'
                id="outlined-required"
                label="User Email"
                defaultValue=''
                onBlur={onBlurChange}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mt:5
            }}
                />
            <TextField
                
                required
                name='product'
                id="outlined-required"
                label="Product Name"
                type='text'
                defaultValue=''
                onBlur={onBlurChange}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mb:2,
                mt:3
            }}
                />
                <TextField
                required
                onBlur={onBlurChange}
                id="outlined-required"
                label="Description"
                name='description'
                defaultValue=''
                sx={{
                width:'60%',
                marginLeft:'20px',
                mt:5
            }}
                />
          
            
            <TextField
                required
                name='rating'
                id="outlined-required"
                label="Rating Product"
                defaultValue=''
                onBlur={onBlurChange}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mb:2,
                mt:3
            }}
                />
           
                
            
                <Button type='submit' sx={{ 
                    
                    background: 'linear-gradient(to right, #50c9c3, #96deda)',
                    color:'#ffff',
                    mt:3,
                    marginLeft:'80%',
                    
                }}
                    >
                        send
                </Button>

            </form>
        
        </>
    );
};

export default Review;