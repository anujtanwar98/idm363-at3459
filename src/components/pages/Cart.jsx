import React from 'react'
import { Stack } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export function Cart () {
  const [cartItems, setCartItems] = useState([])
    return (
        <>
        <h1 className="text-center">Cart Items</h1>
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
          <div>
              {cartItems.length === 0 && <h4>Cart is empty</h4>}
          </div>
        </Stack>
        </>
    )
}