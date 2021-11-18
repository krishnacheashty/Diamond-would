import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            page 404....
            <Link to='/home' style={{textDecoration:'none',}}>
                    <Button color="inherit" sx={{color:'#fff'}}>Home</Button>
                </Link>
        </div>
    );
};

export default PageNotFound;
