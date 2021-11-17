import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const AddAdmin = () => {
    const [loginData,setLoginData]=useState({})
    const onBlurChange=e=>{

        const field=e.target.name;
        const value=e.target.value;
        console.log(field,value)
        const newUserInfo={...loginData}
        newUserInfo[field]=value;
        setLoginData(newUserInfo)
        }
        /* onSubmit function */
        const handleLogIn=(e)=>{
             axios.post('http://localhost:5000/users')
        .then(result=>{
            if(result){
                alert("you are successfully add Admin")
            }
            
        })
            e.preventDefault()
        }
    return (
        <Box>
            <form
                onSubmit={handleLogIn}>
               
                <TextField 
                    sx={{width:'80%'}}
                    id="standard-email-input"
                    label="email"
                    name='email'
                    type="email"
                    onBlur={onBlurChange}
                    autoComplete="current-email"
                    variant="standard"
                    />
                
                
                    <Button 
                        type='submit'
                        sx={{
                        width:'60%',
                        color:'#fff',
                        background: 'linear-gradient(to right, #50c9c3, #96deda)',marginTop:'20px'
                        }}
                        > Make Admin
                    </Button>
                  
                    
            </form>
        </Box>
    );
};

export default AddAdmin;