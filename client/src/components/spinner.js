import React from 'react'
import logo from '../assets/logo-r.png'

const Spinner = () => {
    return (
        <div className='main-container-spinner'>
            <div class="spinner-grow text-danger" role="status" />
            <div class="spinner-grow text-danger" role="status" />
            <div class="spinner-grow text-danger" role="status" />
            <img src={logo} width={125} height={125} />
            <div class="spinner-grow text-danger" role="status" />
            <div class="spinner-grow text-danger" role="status" />
            <div class="spinner-grow text-danger" role="status" />
        </div >
    )
}

export default Spinner