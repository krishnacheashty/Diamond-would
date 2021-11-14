import React from 'react';

const service = ({productEach}) => {
    const{name}=productEach;
    console.log(name)
    return (
        <>
        {name}
        </>
    );
};

export default service;
