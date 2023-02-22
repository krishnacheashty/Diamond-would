import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import NavbarTop from '../../../sheared/navigation/NavbarTop';



const Parchage = () => {
    // user er information newa hoyeche useAuth hook theke.
    const{user}=useAuth()
    // serviceId ke neya hoi useParam () theke
    const{serviceId}=useParams() 
    // eck ta object create kora hoyeche ja ke orderinfo te store kora hoyeche
    const initialInfo={userName:user.displayName,email:user.email,phone:'',address:'',}
    const [orderinfo,setOrderinfo]=useState(initialInfo)

    const[booking,setBooking]=useState(false)
    
    const[service,setService]=useState({})

    useEffect(()=>{
        fetch(`https://shrouded-crag-83318.herokuapp.com/products/${serviceId}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setService(data)
        })
    },[serviceId]);
 
    const onBlurChange=(e)=>{
        const field=e.target.name
        const value=e.target.value
        console.log(field,value)
        const newUser={...orderinfo}
        newUser[field]=value
        setOrderinfo(newUser)
    }
    
     const fromHandler=(e)=>{
        const orderBooking={
            ...orderinfo,
            productName:service.name,
            price:service.price,
            rating:service.rating,
            status:'pending'

        }
        axios.post('https://shrouded-crag-83318.herokuapp.com/order',orderBooking)
        .then(data=>{
            if(data){
                alert("Do you want to add that service?")
            }
            // console.log(data?.data?.insertedId)
             if(data?.data?.insertedId){
                
                setBooking(true)
            }      
        })

        e.preventDefault()
        
        /* post method */
        
            
       
     }
    return (
        <>
        <NavbarTop/>
        <Box>
            Product You Selected
            
            <form onSubmit={fromHandler}>
            <TextField
                required
                disabled
                id="outlined-required"
                label="User Name"
                defaultValue={user.displayName}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mt:5
            }}
                />
            <TextField
                required
                disabled
                id="outlined-required"
                label="User Email"
                defaultValue={user.email}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mt:5
            }}
                />
            {service?.name && <TextField
                disabled
                required
                id="outlined-required"
                label="Product Name"
                type='text'
                defaultValue={service.name}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mb:2,
                mt:3
            }}
                />}
            <TextField
                required
                name='phone'
                onBlur={onBlurChange}
                id="outlined-required"
                label="Contract Phone"
                type='number'
                defaultValue=""
                sx={{
                width:'60%',
                marginLeft:'20px',
                mb:2,
                mt:3
            }}
                />
            {service?.price &&<TextField
                required
                disabled
                id="outlined-required"
                label="Price"
                defaultValue={service.price}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mb:2,
                mt:3
            }}
            />}
            {service?.rating &&<TextField
                required
                disabled
                id="outlined-required"
                label="Rating Product"
                defaultValue={service.rating}
                sx={{
                width:'60%',
                marginLeft:'20px',
                mb:2,
                mt:3
            }}
                />}
            <TextField
                required
                name="address"
                onBlur={onBlurChange}
                id="outlined-required"
                label="Address"
                type='text'
                defaultValue=''
                sx={{
                width:'60%',
                marginLeft:'20px'}}
                />
                {
                booking && <Alert severity="success" sx={{ 
                    mt:3,
                    marginLeft:'20%',
                    width:'60%',
                    
                }}>You are Successfully submitted</Alert>
            }
                <Button type='submit' sx={{ 
                    
                    background: 'linear-gradient(to right, #50c9c3, #96deda)',
                    color:'#ffff',
                    mt:3,
                    marginLeft:'80%',
                    
                }}
                    >
                    Buy Now
                </Button>

            </form>
        </Box>
        </>
    );
};

export default Parchage;