import React from 'react'
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <Link to='/'> 
            <div className='navbar' alt="">
                <FaCoins className='icon' />
                <h1>Coin <span className='purple'>Tracker</span></h1>
            </div>
            </Link>
            )
}

            export default Navbar