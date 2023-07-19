import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProductoId } from './asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const itemId = useParams();

    useEffect(()=>{
        getProductoId(4)
            .then(response => {
                setProducto(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto}/>
        </div>
    );
}

export default ItemDetailContainer;
