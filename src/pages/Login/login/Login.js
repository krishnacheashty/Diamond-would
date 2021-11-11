import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import logo from '../../../images/rings/undraw_authentication_fsn5.c228945f.png'
import { Button, Container, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData,setLoginData]=useState({});

    const handleLogIn=(e)=>{
        alert('submitted')
        e.preventDefault();
    }

    const onBlurChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field,value);
        const newUser={...loginData};
        newUser[field]=value;
        setLoginData(newUser);

    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item={true} xs={6} md={6} sx={{marginTop:'12%'}}>
                    <Typography variant='body1'>
                        Login
                    </Typography>
                <Box sx={{boxShadow:3,borderBottom: 1}}>
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
                            <TextField
                                sx={{width:'80%'}}
                                id="standard-password-input"
                                onBlur={onBlurChange}
                                label="Password"
                                name='password'
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                                <Button 
                                    type='submit'
                                    sx={{
                                    width:'60%',
                                    color:'#fff',
                                    background: 'linear-gradient(to right, #50c9c3, #96deda)',marginTop:'20px'
                                    }}
                                    > Sign-in
                                </Button>
                                <NavLink 
                                    to='/register' 
                                    style={{textDecoration:'none'}}>
                                    <Button>New User?? Then please Register first

                                    </Button>
                                </NavLink>
                        </form>
                    </Box>
                </Grid>

                <Grid item xs={6} md={6}>
                    <img src={logo} alt="loginLogo" style={{width:'100%',height:'90vh'}} />
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Login;