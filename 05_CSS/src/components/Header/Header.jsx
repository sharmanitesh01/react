import React from 'react'
import sty from './Header.module.css'

const Header = () => {
  return (
    <div className={sty.header}>
        <h3>Nitesh </h3>
        <button className='btn'> Login</button>
    </div>
  )
}

export default Header