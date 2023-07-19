import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProductos, getProductosCategoria } from './asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const {categoriaId} = useParams()

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductosCategoria : getProductos
    asyncFunc(categoriaId)
      .then(response => {
        setProductos(response)
      })
      .catch(error => {
        console.error(error)
      })
  },[categoriaId])

  

  return (
    <div>
      <h2 className='text-center text-xl mt-4'>
        {greeting}
      </h2>
      <ItemList productos={productos}/>
      
    </div>
  )
}

export default ItemListContainer