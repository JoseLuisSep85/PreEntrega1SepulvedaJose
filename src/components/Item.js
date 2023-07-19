import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, imagen, cantidad, categoria, descripcion}) => {
  return (
    <div className='productoItem border flex flex-wrap flex-col w-80 rounded-md items-center p-3 text-center'>
      <picture>
        <img className='itemImg' src={imagen} alt={nombre} />
      </picture>
      <header className='header'>
        <h2 className='itemTitulo font-semibold text-lg mb-2'>{nombre}</h2>
      </header>
      <section>
        <p className='info font-light text-lg mb-4'>Categoria: {categoria}</p>
        <p className='info mb-8'>Precio: ${precio}</p>
      </section>
      <footer className='itemFooter mb-8'>
        <Link to={`/item/${id}`} className='option bg-sky-600 rounded-lg h-12 p-3 text-white hover:bg-sky-500'>Ver detalle</Link>
      </footer>
    </div>
  )
}

export default Item