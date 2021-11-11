import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const NavbarTop = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Diamond house
                </Typography>
                <NavLink to='/Explore' style={{textDecoration:'none',}}>
                    <Button color="inherit" sx={{color:'#fff'}}>Explore</Button>
                </NavLink>
                <NavLink to='/login' style={{textDecoration:'none',}}>
                    <Button  sx={{color:'#fff'}}>login</Button>
                </NavLink>
                
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavbarTop;