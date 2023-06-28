import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

function CartWidget() {
  return (
    <div className='flex'>
        <ShoppingCartIcon className=' h-8'/>
        <p>0</p>
    </div>
  )
}

export default CartWidget