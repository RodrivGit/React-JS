import React from "react";
import PropTypes from 'prop-types';

const MiPrimeraApp = ({title,subtitle}) => { 
    return (
        
        <>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            <p>asd: </p>   
        </>    
    ) 
};

MiPrimeraApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

export default MiPrimeraApp;