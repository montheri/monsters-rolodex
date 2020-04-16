import React from 'react'

import './searchBox.styles.css'

export const searchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} />
);