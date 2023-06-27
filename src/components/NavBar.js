import React from 'react'
import TecnoPlay_Logo from '../assets/TecnoPlay_Logo.svg'

function NavBar() {
  return (
    <nav>
        <img 
            src={TecnoPlay_Logo}
            alt = 'TecnoPlay logo'
        />
        <button>SmartPhones</button>
        <button>Notebooks</button>
        <button>Videojuegos</button>
    </nav>
  )
}

export default NavBar