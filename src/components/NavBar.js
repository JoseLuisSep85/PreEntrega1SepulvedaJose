import React from 'react'
import TecnoPlay_Logo from '../assets/TecnoPlay_Logo.svg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex bg-sky-700 sticky p-4 justify-between items-center pr-8'>
        <img
            className=' h-24' 
            src={TecnoPlay_Logo}
            alt = 'TecnoPlay logo'
        />
        <div className='flex gap-4 text-white items-center'>
          <NavLink to="/" className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500'>Inicio</NavLink>
          <NavLink to="/categoria/SmartPhones" className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500'>SmartPhones</NavLink>
          <NavLink to="/categoria/Notebooks" className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500'>Notebooks</NavLink>
          <NavLink to="/categoria/VideoJuegos" className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500'>Videojuegos</NavLink>
          <CartWidget/>
        </div>
        
    </nav>
  )
}

export default NavBar