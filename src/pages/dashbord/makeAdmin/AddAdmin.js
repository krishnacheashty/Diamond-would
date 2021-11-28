import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddAdmin = () => {

    const [email,setEmail]=useState('');
    const [success,setSuccess]=useState(false)

    /* set field value at email */
    const onBlurChange=e=>{
        setEmail(e.target.value)
    }


        /* onSubmit client site admin */
        const handleAddAdmin=(e)=>{
            const user={email}
            fetch('http://localhost:5000/users/admin',{
                method:'PUT',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(user)
                
                
              })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
                console.log(data)
                setEmail('')
            }
           
            
        })
            e.preventDefault()
        }



    return (
        <Box sx={{backgroundColor:'#eae0d4',height:'90vh'}}>
            <form
                onSubmit={handleAddAdmin} >
               
                <TextField 
                    sx={{width:'80%',marginTop:'25%'}}
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
                        color:'#000',
                        background: 'linear-gradient(to right, #50c9c3, #96deda)',marginTop:'20px'
                        }}
                        > Make Admin
                    </Button>
                  
                    
            </form>
            {success && <Alert sx={{mx:'auto',width:'250px',marginTop:'20px'}}>Add Admin Successfully.</Alert>}
        </Box>
    );
};

export default AddAdmin;