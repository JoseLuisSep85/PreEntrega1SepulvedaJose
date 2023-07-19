import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProductoId } from './asyncMock';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        getProductoId(Item.id)
            .then(response => {
                setProducto(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [id])
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto}/>
        </div>
    );
}

export default ItemDetailContainer;
