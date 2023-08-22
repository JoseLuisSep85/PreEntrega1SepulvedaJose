import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductoId } from '../asyncMock/asyncMock';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);


    useEffect(()=>{
        getProductoId(4)
            .then(response => {
                setProducto(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto}/>
        </div>
    );
}

export default ItemDetailContainer;
