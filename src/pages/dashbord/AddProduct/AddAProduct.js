import { Box } from '@mui/system';
import React,{ useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const AddAProduct = () => {
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
            axios.post('https://diamond-would-server-side.onrender.com/products')
        .then(result=>{
            if(result){
                alert("you are successfully add you event")
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
                    id="standard-name-input"
                    label="name"
                    name='name'
                    type="name"
                    onBlur={onBlurChange}
                    autoComplete="current-name"
                    variant="standard"
                    />
                <TextField 
                    sx={{width:'80%'}}
                    id="standard-name-input"
                    label="picture url"
                    name='picture'
                    type="name"
                    onBlur={onBlurChange}
                    autoComplete="current-name"
                    variant="standard"
                    />
                <TextField 
                    sx={{width:'80%'}}
                    id="standard-email-input"
                    label="prize"
                    name='prize'
                    type="number"
                    onBlur={onBlurChange}
                    autoComplete="current-email"
                    variant="standard"
                    />
                <TextField 
                    sx={{width:'80%'}}
                    id="standard-email-input"
                    label="description"
                    name='description'
                    type="text"
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
                        > send
                    </Button>
                  
                    
            </form>
        </Box>
    );
};

export default AddAProduct;