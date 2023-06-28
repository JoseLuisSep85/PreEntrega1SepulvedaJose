import React from 'react'
import TecnoPlay_Logo from '../assets/TecnoPlay_Logo.svg'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className='flex bg-sky-700 sticky p-4 justify-between items-center'>
        <img
            className=' h-24' 
            src={TecnoPlay_Logo}
            alt = 'TecnoPlay logo'
        />
        <div className='flex gap-4 text-white items-center'>
            <button className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500'>SmartPhones</button>
            <button className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500' >Notebooks</button>
            <button className='bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500'>Videojuegos</button>
            <CartWidget/>
        </div>
        
    </nav>
  )
}

export default NavBar