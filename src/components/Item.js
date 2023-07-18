import React from 'react'

const Item = ({id, nombre, precio, imagen, cantidad, descripcion}) => {
  return (
    <div className='productoItem border flex flex-wrap flex-col w-80 rounded-md items-center p-3 text-center'>
      <picture>
        <img className='itemImg' src={imagen} alt={nombre} />
      </picture>
      <header className='header'>
        <h2 className='itemTitulo font-semibold text-lg mb-2'>{nombre}</h2>
      </header>
      <section>
        <p className='info font-light text-lg mb-4'>{descripcion}</p>
        <p className='itemPrecio mb-4'>Precio: ${precio}</p>
        <p className='info mb-8'>Stock disponible: {cantidad}</p>
      </section>
      <footer className='itemFooter'>
        <button className='opcion bg-sky-600 rounded-lg h-12 p-3 text-white hover:bg-sky-500'>Ver detalle</button>
      </footer>
    </div>
  )
}

export default Item