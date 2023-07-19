import React from 'react'
import TecnoPlay_Logo from '../assets/TecnoPlay_Logo.svg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex bg-sky-700 sticky p-4 justify-between items-center pr-8'>
        <Link to="/">
          <img className=' h-24' src={TecnoPlay_Logo} alt = 'TecnoPlay logo'/>
        </Link>
        
        <div className='flex gap-4 text-white items-center'>
          <NavLink to="/categoria/SmartPhones" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>SmartPhones</NavLink>
          <NavLink to="/categoria/Notebooks" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
          <NavLink to="/categoria/Videojuegos" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Videojuegos</NavLink>
          <CartWidget/>
        </div>
        
    </nav>
  )
}

export default NavBar