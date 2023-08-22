import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ nombre, precio, imagen, cantidad, categoria, descripcion}) => {

    const [cantidadAdd, setCantidadAdd] = useState(0)
    
    
    const handleOnAdd = (cantidad) => {
        setCantidadAdd(cantidad)
    }




  return (

    <div className='border flex flex-wrap flex-col w-1/4 rounded-md items-center p-3 text-center m-auto mb-5 mt-5'>
        
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
            {
                cantidadAdd > 0 ? (
                    
                    <Link to='../cart' className='boton bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500 text-white m-8'>Terminar compra</Link>

                ) : (
                    
                    <ItemCount initial={1} stock={cantidad} onAdd={handleOnAdd}/>

                    )
            }
            
        </footer>
    </div>
  )
}

export default ItemDetail