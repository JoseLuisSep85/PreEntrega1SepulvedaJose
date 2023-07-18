import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProductos } from './asyncMock'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    getProductos()
      .then(response => {
        setProductos(response)
      })
      .catch(error => {
        console.error(error)
      })
  })

  const onAdd = (props) => {
    console.log("Cantidad Agregada", props);
  }

  return (
    <div>
      <h2 className='text-center text-xl mt-4'>
        {greeting}
      </h2>
      <ItemList productos={productos}/>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer