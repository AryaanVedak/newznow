import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <img className='spin' src={loading} alt="loading" />
    )
}

export default Spinner