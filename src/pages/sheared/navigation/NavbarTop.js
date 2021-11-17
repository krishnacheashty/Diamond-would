import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const NavbarTop = () => {
    const{user,logOut}=useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Diamond house
                </Typography>
                <NavLink to='/explore' style={{textDecoration:'none',}}>
                    <Button color="inherit" sx={{color:'#fff'}}>Explore</Button>
                </NavLink>
                <NavLink to='/home' style={{textDecoration:'none',}}>
                    <Button color="inherit" sx={{color:'#fff'}}>Home</Button>
                </NavLink>
                {
                    user.email ?
                    <Box>
                        <Link to='/dashboard'style={{textDecoration:'none'}}>
                            <Button  color="inherit" sx={{color:'#fff'}}>Dashboard</Button>
                        </Link>
                        <Link to='/login'style={{textDecoration:'none',}}>
                            <Button onClick={logOut} color="inherit" sx={{color:'#fff'}}>Logout</Button>
                        </Link>
                    </Box>
                    : 
                    <NavLink to='/login' style={{textDecoration:'none',}}>
                        <Button color="inherit" sx={{color:'#fff'}}>Login</Button>
                    </NavLink>

                
                }
                
                
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavbarTop;