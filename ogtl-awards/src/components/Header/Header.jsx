import React from 'react'
import './header.css'
import Outsource from '../../assets/outsource.png'

function Header() {
  return (
    <>
      <div className='header-div'>
        <img src={Outsource} alt='Outsource Global' />
        <p>Outsource Global Technologies Awards</p>
      </div>
    </>
  )
}

export default Header