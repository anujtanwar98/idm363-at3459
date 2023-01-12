import React from 'react'
import { Stack } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import CartItemCard from '../cartitemcard/CartItemCard'
import { format_price } from '../utilities/Currency';

export function Cart () {
  const getCart = () => {
    const cart = localStorage.getItem('cart')
    const defaultCart = {cartItems: [], totalValue: 0}
    return cart ? JSON.parse(cart) : defaultCart

  }
  const cart = getCart()
  const cartItems = cart.cartItems
  const totalValue = cart.totalValue


  
    return (
        <>
        <h1 className="text-center">Cart Items</h1>
        {/* <Stack direction="horizontal" gap={2} className="d-flex align-items-center"> */}
          <div>
              {cartItems.length === 0 && <h4>Cart is empty</h4>}
          </div>
          <div>
            {cartItems.map((headphone) => {
                return <CartItemCard key={headphone.id} headphone={headphone} />                
            })}
          </div>
          <div className='mt-5 mb-5'>
            <h4 className='text-center'>Total Value: {format_price(totalValue)}</h4>
          </div>
        {/* </Stack> */}
        </>
    )
}