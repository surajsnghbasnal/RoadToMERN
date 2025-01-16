import React, { useContext } from 'react'
import { CartContext } from './Context/CommonContext'

const Item = ({ name, price }) => {
    const { items, setItems } = useContext(CartContext)

    console.log(items);

    return (
        <div className='item-card' style={{ border: '1px solid', borderRadius: '5px', padding: '20px', textAlign: 'center' }}>
            <h4>{name}</h4>
            <p>$ {price}</p>
            <button onClick={() => setItems([...items, { name, price }])}>Add to cart</button>
        </div>
    )
}

export default Item
