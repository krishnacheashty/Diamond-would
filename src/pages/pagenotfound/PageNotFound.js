import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            page 404....
            <NavLink to='/home' style={{textDecoration:'none',}}>
                    <Button color="inherit" sx={{color:'#fff'}}>Home</Button>
                </NavLink>
        </div>
    );
};

export default PageNotFound;
