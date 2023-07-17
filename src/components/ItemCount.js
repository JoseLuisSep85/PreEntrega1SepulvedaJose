import React, { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    const agregar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const quitar = () => {
        if(cantidad > stock) {
            setCantidad(cantidad - 1)
        }
    }

    return (
    <div className='contador'>
        <div className='controles'>
            <button className='boton' onClick={agregar}></button>
            <h4 className='numero'>{cantidad}</h4>
            <button className='boton' onClick={quitar}></button>   
        </div>
        <div>
            <button className='boton' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount