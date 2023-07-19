import React from 'react'
import ItemCount from './ItemCount'

const onAdd = (props) => {
    console.log("Cantidad Agregada", props);
  }
const ItemDetail = ({id, nombre, precio, imagen, cantidad, categoria, descripcion}) => {
  return (
    <div className='border flex flex-wrap flex-col w-1/4 rounded-md items-center p-3 text-center m-auto mb-5'>
        
        <picture>
            <img src={imagen} alt={nombre} />
        </picture>
        <header>
            <h2 className='font-semibold text-lg mb-2'>
                {nombre}
            </h2>
        </header>
        <section>
            <p>
                Categoria: {categoria}
            </p>
            <p>
                {descripcion}
            </p>
            <p>
                Precio: ${precio}
            </p>
            <p>
                Stock: {cantidad}
            </p>
        </section>
        <footer>
            <ItemCount initial={1} stock={cantidad} onAdd={onAdd}/>
        </footer>
    </div>
  )
}

export default ItemDetail