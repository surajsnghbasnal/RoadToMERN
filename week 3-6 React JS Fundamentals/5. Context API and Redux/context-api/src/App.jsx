import React from 'react'
import Item from './Components/Item'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div className='App'>
      <div className="item-container" style={{ display: 'flex', gap: '10px' }}>
        <Item name='MacBook Pro' price={100000} />
        <Item name='PenDrive' price={4000} />
        <Item name='Mobile' price={25000} />
        <Item name='Smart TV' price={42000} />
      </div>
      <div className="cart" style={{ border: '1px solid', borderRadius: '5px', padding: '20px', textAlign: 'center', marginTop: '20px' }}>
        <Cart />
      </div>
    </div>
  )
}

export default App
