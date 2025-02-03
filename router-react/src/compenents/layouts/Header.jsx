import React from 'react'
import {Navlink} from 'react-router'

const Header = () => {
  return (
    <nav>
        <Navlink to='/'>Home</Navlink> {""}
        <Navlink to='/About'>About</Navlink>
        <Navlink to='/Product'>Product</Navlink>
    </nav>
  )
}

export default Header