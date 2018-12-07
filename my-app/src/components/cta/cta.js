import React from 'react'
import './cta.css'
import { HashLink as Link } from 'react-router-hash-link';


const Cta = () =>{
    return (
        <Link to='/some/path#footer' className="cta-btn">Quero participar!</Link>
    )
}

export default Cta
