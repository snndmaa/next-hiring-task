import CartItemList from '@/components/cart/CartItemList'
import CartTotal from '@/components/cart/CartTotal'
import React from 'react'

function page() {
  return (
    <div className='w-full h-full flex justify-between'>
        <CartItemList/>        

        <CartTotal />
    </div>
  )
}

export default page