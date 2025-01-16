import React, { useContext } from 'react'
import { CartContext } from './Context/CommonContext'

const Cart = () => {
    const { items } = useContext(CartContext)
    const total = items.reduce((a, b) => a + b.price, 0)
    return (
        <div className='cart'>
            <h1>Cart</h1>
            {
                items &&
                items.map((i) => (
                    <li>
                        {i.name}-{i.price}
                    </li>
                ))
            }

            <h3>Total Bill: $ {total}</h3>
        </div>
    )
}

export default Cart
