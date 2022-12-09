import React from 'react'
import { Stack } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import CartItemCard from '../cartitemcard/CartItemCard'

export function Cart () {
  const getCart = () => {
    const cart = localStorage.getItem('cart')
    const defaultCart = {cartItems: [], totalVale: 0}
    return cart ? JSON.parse(cart) : defaultCart

  }
  const cart = getCart()
  const cartItems = cart.cartItems
  const totalValue = cart.totalValue


  
    return (
        <>
        <h1 className="text-center">Cart Items</h1>
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
          <div>
              {cartItems.length === 0 && <h4>Cart is empty</h4>}
          </div>
          <div>
            {cartItems.map((headphone) => {
                return <CartItemCard key={headphone.id} headphone={headphone} />                
            })}
          </div>
        </Stack>
        </>
    )
}